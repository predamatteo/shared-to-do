import AsyncStorage from '@react-native-async-storage/async-storage'

export const storeRoom = async (room) => {
  console.log(room)
  try {
    if(room !== '' || room !== null){
      await AsyncStorage.setItem(
        'room',
        room
      );

      console.log('stanza inserita')
    } 
    }catch (error) {
      console.log(error + '\n' + 'sono io')
    }
    
};


export const retrieveRoom = async () => {
  try {
    const value = await AsyncStorage.getItem('room')
    if(value !== null){
      return value
    }

  } catch (error) {
    console.log(error)
  }
};

export const deleteRoom = () => {
  AsyncStorage.removeItem('room');
  //qua forse si potrebbe chiamare anche un metodo in http per rimuovere all'interno di firebase della room
}
