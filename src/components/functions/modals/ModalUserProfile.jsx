import { ModalContent, ModalOverlay } from "../../../styles/ModalsStyles";


export default function ModalUserProfile({ children }) {
    return (
        <ModalOverlay>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                {children}
            </ModalContent>
        </ModalOverlay>
    );
}
