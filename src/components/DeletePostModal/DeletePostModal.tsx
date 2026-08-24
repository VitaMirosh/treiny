import {ModalRadix} from '../ModalRadix/ModalRadix.tsx';
import {Button} from '../Button/Button.tsx';



type Props = {
  open: boolean
  onClose: () => void
}

export const DeletePostModal = ({ open, onClose }: Props) => {
  return (
    <ModalRadix open={open} onClose={onClose} modalTitle={"Delete Post"} size={'lg'}>
      Are you sure you want to delete this post?
      <div>
        {/*Будем использовать обычные кнопки*/}
        <Button onClick={onClose} asChild><a href='http://localhost:8080'>Yes</a></Button>
        <Button onClick={onClose} variant={'secondary'}>No</Button>
      </div>
    </ModalRadix>
  )
}