import React from 'react'
import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  /*Body style*/
  container:{
    flex: 1,
    backgroundColor: '#fafafa'
  },
  inner:{
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 10
  },
  /*style for header*/
  headerContain:{
    textAlign: 'center',
    padding: 8
  },
  headerTitle:{
    fontSize: 18,
    color: '#00bfa5',
    
    textAlign: 'center',
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
  headerSubTitle:{
    textAlign: 'center',
    fontSize: 16,
    color: '#424242',
    fontWeight: '300',
    fontFamily: 'sans-serif',
    textTransform: 'uppercase'
  },

  /*styles for description*/
  description:{
    marginVertical: 10,
  },
  descContent:{
    backgroundColor: '#e0e0e0',
    marginVertical: 8,
    padding: 8,
  },
  descButton:{
    flex: 1,
    flexDirection: 'row',
  },
  buttonDesc:{
    flex: 1,
    justifyContent: 'center',
    padding: 8,
    borderColor: '#e0e0e0',
    borderWidth: 1,
    borderStyle: 'solid',
    flexDirection: 'row',
    borderRadius: 4,
    marginVertical: 5,
  },

  buttonText:{
    flex: 1,
    textAlign: 'center',
  },

  /*style form contain*/
  formContain:{
    marginTop: 5
  },
  inputContain:{
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderBottomColor: '#c1c1c1',
    justifyContent:'center',
    flexDirection: 'row',
  },
  titleInput:{
    flex: 4,
    justifyContent: 'center',
    paddingVertical: 8,
  },
  titleInputDesc:{
    fontSize: 12,
    color: '#c1c1c1',
    fontStyle: 'italic',
    paddingHorizontal: 5
  },
  titleInputText:{
    color: '#424242',
    fontSize: 14,
    fontWeight: '300',
    textAlign: 'left',
    paddingVertical: 5
  },
  inputContent:{
    flex: 3
  },
  unitContainInput:{
    flex:2
  },
  input:{
    marginHorizontal: 5,
    flexDirection: 'row',
    borderColor: '#424242',
    borderBottomWidth: 1,
    textAlign: 'right',
    paddingHorizontal: 10,
    fontSize: 16,
    fontWeight: 'bold',
    
    color: '#424242',
  },
  alertText:{
    color: '#ef9a9a',
    fontSize: 12,
    
    padding: 5,
    fontStyle: 'italic'
  },
  unitContainInput:{
    flex: 2,
    //paddingHorizontal: 8,
    paddingVertical: 8,
  },
  unitTitle:{
    color: '#424242',
    
    textAlign: 'center'
  },

  /*this is styles for radio button*/
  buttonContainHorizontal:{
    flex:7,
    flexDirection: 'row',
    borderRadius: 4,
  },
  buttonContainVertical:{
    flex:7,
  },

  buttonNonSelect:{
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fafafa',
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    borderWidth: 0.5,
    borderColor: '#c1c1c1',
    padding: 5,
    minHeight: 40,
    maxHeight: 50,
  },
  buttonSelect :{
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#00bfa5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    minHeight: 40,
    maxHeight: 50,
  },

  buttonTextSelect:{
    fontSize: 12,
    
    color: '#fafafa',
  },
  buttonTextNonSelect:{
    fontSize: 12,
    
    color: '#424242',
  },

  /*This is styles for result contain*/
  resultContain:{
    backgroundColor: '#00bfa5',
    marginTop: 10,
    padding: 5,
    borderRadius: 2,
    shadowColor: "#000",
    shadowOffset: {
    	width: 0,
    	height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,

  },
  resultTitle:{
    flexDirection:'row',
  },
  resultTitleText:{
    color: '#fafafa',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 15
  },
  resultTitleDesc:{
    color: '#fafafa',
    
    fontSize: 14,
    fontStyle: 'italic',
    margin: 8,
    justifyContent: 'flex-end',
    flex: 1,
  },
  resultContent:{
    flexDirection: 'row',
  },
  result:{
    color: '#fafafa',
    fontWeight: 'bold',
    
    fontSize: 35,
    paddingHorizontal: 8
  },
  unitContain:{
    flexDirection:'row',
    paddingTop: 10,
    marginLeft: 5,
  },
  unit:{
    color: '#fafafa',
    fontSize: 18,
  },
  rateContent:{
    paddingHorizontal: 5,
    color: '#fafafa',
    fontSize: 18,
    fontStyle: 'italic',
    borderColor: '#fafafa',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    paddingVertical: 5
  },
  icons:{
    marginLeft: 10,
    paddingHorizontal: 8
  },

  /*this is style for info content*/
  formInfo:{
    backgroundColor: '#eeeeee',
    marginVertical: 8,
    padding: 5,
    borderRadius: 4
  },
  formInfo2col:{
    backgroundColor: '#eeeeee',
    borderRadius: 4,
    flexDirection: 'row',
    borderBottomColor: '#aeaeae',
    borderBottomWidth: 1,
    borderStyle: 'solid'
  },
  infoCol1:{
    flex: 7,
    paddingHorizontal: 4
  },
  infoCol2:{
    flex: 3,
    paddingHorizontal: 4
  },

  titleInfo:{
    color: '#424242',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily:'sans-serif'
  },
  infoText:{
    
    color: '#424242',
    fontSize: 14,
    fontStyle: 'italic',
    paddingVertical: 5
  },

  /*This is styles for list*/
  listContainer:{
    backgroundColor: '#fafafa',
    padding: 5,
    borderRadius: 4,
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderColor: '#e0e0e0',
    flexDirection: 'row'
  },
  listContent:{
    flex: 1,
  },
  listTitle:{
    textAlign: 'left',
    color: '#424242',
    fontWeight: 'bold',
    
    fontSize: 16
  },
  iconRight:{
    textAlign: 'center',
    marginTop: 10,
    paddingHorizontal: 8
  },
  bottomBanner:{
    top: 0,
    position: "absolute",
  },
  btnLink:{
    marginVertical: 15,
    justifyContent: 'center',
    padding: 8
  },
  link:{
    fontSize: 16,
    
    color: '#424242',
    fontStyle: 'italic',
    textAlign: 'right'
  },

  /*this is styles for info contain*/
  infoContain:{
    marginTop: 15,
    backgroundColor: '#e0e0e0',
    borderRadius: 4
  },
  titleInfoContain:{
    flexDirection: 'row',
    padding: 5
  },
  titleInfo:{
    paddingVertical: 5,
    flex: 1,
    
    fontWeight: 'bold',
    color: '#424242',
    fontSize: 18
  },
  infoTextLink:{
    color: '#2ecc71',
    fontSize: 14,
    fontStyle: 'italic',
    
    padding: 5
  },
  formImportant:{
    marginTop: 8,
    padding:8,
    backgroundColor: 'coral'
  },
  importantText:{
    color: '#fafafa',
    fontSize: 14,
    fontFamily: 'sans-serif'
  },
  formIntructions:{
    marginTop: 8,
    padding:8,
    backgroundColor: '#90a4ae'
  },
})
