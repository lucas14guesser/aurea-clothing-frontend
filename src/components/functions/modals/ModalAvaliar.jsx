import { ModalContent, ModalOverlay } from "../../../styles/ModalsStyles";


export default function ModalAvaliar({ children }) {
    return (
        <ModalOverlay>
            <ModalContent onClick={(e) => e.stopPropagation()} style={{width: '30rem'}}>
                {children}
            </ModalContent>
        </ModalOverlay>
    );
}
