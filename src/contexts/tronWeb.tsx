import React, { ReactNode, useState, useEffect } from "react";
import TronWeb from "tronweb";
import { node, contract } from "./config";
import * as qs from "query-string";
// import LoadingScreen from "components/core/loadingScreen";
interface IProps {
    children: ReactNode;
}

const TronContext = React.createContext({
    connectTronLink: () => { },
    data: {
        ready: false,
        harambe: undefined as any
    },
    action: {
        isConnect: false,
        address: "T9yD14Nj9j7xAB4dbGeiX9h8unkKHxuWwb",
        harambe: undefined as any,
    },
});

const tronWeb = new TronWeb({
    fullNode: node,
    solidityNode: node,
    eventServer: node,
    privateKey:
        "EC60C070F98F768400F45CF0674092998B716E7B0D5C26F31E30B2E1A3785B7D",
});

const waitTron = () => {
    return new Promise((res) => {
        let attempts = 0,
            maxAttempts = 20;
        const checkTron = () => {
            if (
                (window as any).tronWeb &&
                (window as any).tronWeb.defaultAddress.base58
            ) {
                res(true);
                return;
            }
            attempts++;
            if (attempts >= maxAttempts) {
                res(false);
                return;
            }
            setTimeout(checkTron, 100);
        };
        checkTron();
    });
};

const initStatic = async () => {
    const [harambe] = await Promise.all([tronWeb.contract().at(contract.getAddress)])
    return {
        ready: true,
        harambe
    };
};
const initAction = async () => {
    let tronExist = await waitTron();
    if (tronExist) {
        const [harambe] = await Promise.all([(window as any).tronWeb
            .contract()
            .at(contract.getAddress)
        ])
        return {
            isConnect: true,
            address: (window as any).tronWeb.defaultAddress.base58,
            harambe
        };
    } else {
        return {
            isConnect: false,
            address: "T9yD14Nj9j7xAB4dbGeiX9h8unkKHxuWwb" as any,
            harambe: undefined as any,
        };
    }
};

export default ({ children }: IProps) => {
    const [tronStatic, setTronStatic] = useState({
        ready: false,
        harambe: undefined as any
    });
    useEffect(() => {
        initStatic().then((dataTron) => setTronStatic(dataTron));
    }, []);

    const [tronAction, setTronAction] = useState({
        isConnect: false,
        address: "T9yD14Nj9j7xAB4dbGeiX9h8unkKHxuWwb" as any,
        harambe: undefined as any,
    });
    useEffect(() => {
        initAction().then((actionTron) => setTronAction(actionTron));
    }, []);

    const connectTronLink = () => {
        initAction().then((actionTron) => setTronAction(actionTron));
    };

    useEffect(() => {
        if (tronAction.isConnect) {
            window.addEventListener("message", function (e) {
                if (e.data.message?.action === "setAccount") {
                    setTronAction({
                        ...tronAction,
                        address: e.data.message.data.address,
                    });
                }
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tronAction.isConnect]);
    return (
        <TronContext.Provider
            value={{
                connectTronLink,
                data: tronStatic,
                action: tronAction,
            }}
        >
            {children}
        </TronContext.Provider>
    );
};

export { TronContext, tronWeb };
