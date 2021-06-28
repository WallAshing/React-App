import { StyleSheet } from 'react-native';

var Style = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 16,
    },
    nav_container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      flexDirection: 'row',
    },
    links: {
      marginHorizontal: 16,
    },
    blue_container: {
      height:'calc(100vh - 136px)',
      backgroundColor: '#2983F0',
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 16,
    },
    red_container: {
      height:'calc(100vh - 136px)',
      backgroundColor: '#E64B29',
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 16,
    },
    none:{
      height:'calc(100vh - 136px)',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title:{
      fontSize: '20px',
      color: 'black',
      textAlign: 'center',
      marginVertical: 8,
    },
    text:{
      fontSize: '15px',
      fontStyle: 'italic',
      color: 'black',
      textAlign: 'center',
      marginVertical: 8,
    },
    white_title: {
      fontSize: '20px',
      color: 'white',
      textAlign: 'center',
      marginVertical: 8,
    },
    input: {
      height: 40,
      margin: 12,
      padding: 12,
      borderWidth: 1,
      borderRadius: 5,
    },
});

export default Style;