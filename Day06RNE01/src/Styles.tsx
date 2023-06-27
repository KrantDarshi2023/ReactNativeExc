import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainView: {
    borderRadius: 50,
    borderWidth: 5,
    justifyContent: 'center',
    alignItems: 'center',
    height: '98%',
  },
  box: {
    width: '80%',
    height: 200,
    backgroundColor: '#ebd650',
    alignSelf: 'center',
    borderRadius: 9,
    borderWidth: 5,
  },
  text: {
    marginTop: 100,
    textAlign: 'center',
    alignContent: 'center',
    borderBottomWidth: 1,
  },
  Login: {
    fontSize: 40,
    marginLeft: '30%',
    //alignSelf:'center'
  },
  image: {
    marginTop: 40,
    height: 200,
    width: 200,
    alignSelf: 'center',
    backgroundColor: '#141414',
  },
  inputView: {
    marginTop: 40,
    marginLeft: '25%',
    flexDirection: 'row',
  },
  phoneImage: {
    height: 30,
    width: 30,
  },
  button: {
    backgroundColor: '#73b9eb',
    width: 200,
    borderRadius: 40,
    borderWidth: 2,
    position: 'relative',
    alignSelf: 'center',
    marginTop: -25,
  },
  button2: {
    backgroundColor: '#73b9eb',
    width: 200,
    borderRadius: 40,
    borderWidth: 2,
    position: 'relative',
    alignSelf: 'center',
    marginTop: 0,
  },
});

export const styleRegister = StyleSheet.create({
  mainView: {
    borderRadius: 50,
    borderWidth: 5,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#33b06f',
  },
  box: {
    width: '80%',
    height: 400,
    backgroundColor: '#63e3e6',
    alignSelf: 'center',
    borderRadius: 9,
    borderWidth: 5,
    marginTop: 40,
  },
  Register: {
    fontSize: 40,
    marginLeft: '30%',
    //alignSelf:'center'
  },
  text: {
    marginTop: 100,
    textAlign: 'center',
    alignContent: 'center',
    borderBottomWidth: 1,
  },
  inputView: {
    marginTop: 40,
    marginLeft: '25%',
    flexDirection: 'row',
  },
  MotuImage: {
    marginTop: 10,
    marginLeft: '33%',
    height: 70,
    width: 70,
    borderRadius: 50,
  },
  CameraImage: {
    height: 20,
    width: 20,
    alignSelf: 'center',
    marginRight: 20,
    marginTop: 115,
    position: 'absolute',
  },
  phoneImage: {
    height: 30,
    width: 30,
  },
  button: {
    backgroundColor: '#73b9eb',
    width: 100,
    borderRadius: 20,
    borderWidth: 4,
    position: 'relative',
    alignSelf: 'center',
    marginTop: -25,
  },
});
