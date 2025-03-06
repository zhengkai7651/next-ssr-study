
import MetaMaskCard from '@components/connectorCards/MetaMaskCard';
import { DepositForm } from '@components/DepositForm';

export default function DAppMain() {
    return (
        <>
            <MetaMaskCard />
            <hr />
            <DepositForm />
        </>
    );
}