import { FunctionComponent, useState } from 'react';
import { View, Modal as DefaultModal } from 'react-native';
import { PressableText } from '../styled/PressableText';
import styles from './styles';

type ModalProps = {
  activator?: FunctionComponent<{
    handleOpen: () => void;
  }>;
  children: FunctionComponent<{
    handleOpen: () => void;
    handleClose: () => void;
  }>;
};

export function Modal({ activator: Activator, children }: ModalProps) {
  const [isModalVisible, setModalVisible] = useState(false);

  const handleOpen = () => setModalVisible(true);
  const handleClose = () => setModalVisible(false);

  return (
    <View>
      <DefaultModal
        visible={isModalVisible}
        transparent={false}
        animationType='fade'
      >
        <View style={styles.centerView}>
          <View style={styles.contentView}>
            {children({ handleOpen, handleClose })}
          </View>
          <PressableText
            onPress={handleClose}
            text='X Close'
            style={{ backgroundColor: 'white', color: 'black' }}
          />
        </View>
      </DefaultModal>
      {Activator ? (
        <Activator handleOpen={handleOpen} />
      ) : (
        <PressableText onPress={handleOpen} text='Open' />
      )}
    </View>
  );
}
