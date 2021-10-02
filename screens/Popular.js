import React,{Component} from "react";
import {View,Text,StyleSheet,Image,TouchableOpacity, FlatList} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {Header,AirbnbRating,Icon} from 'react-native-elements';
import axios from 'axios';
import { render } from "react-dom";

export default class Home extends React.Component{
constructor(){
super()

this.state = {
data : []
}
}

componentDidMount(){
this.get_data()
}
    
get_data=()=>{
const url = "http://localhost:5000/popular-movies"
axios
.get(url)
.then(response=>{
details["duration"] = this.timeConvert(details.duration)
this.setState({
data:response.data.data
})
}).catch(error=>{
console.log(error.message)
})
}
    

timeConvert(num){
var hours = Math.float(num/60)
var minutes = num%60
return `${hours} hrs ${minutes} mins`;
}

keyExtractor = (item,index)=>index.toString()
renderItem=({item,index})=>{

return(
<Card 
key = {`card-${index}`}
image = {{uri = item.poster_link}}
imageProps = {{resizeMode:"cover"}}
featureTitle = {item.title}
containerStyle = {styles.cardContainer}
featuredTitleStyle = {styles.title}
featureSubTitle = {`${item.release_date.split("-")[0]} | $ {this.timeConvert(item.duration)}`}
featuredSubTitleStyle = {styles.subtitle}
>

</Card>
)
}

render(){
const {data} = this.state
return(
<View style={styles.container}>
<FlatList
data = {data}
keyExtractor={this.keyExtractor}
renderItem = {this.renderItem}
/>
</View>
)
}
}



const styles = StyleSheet.create({ 
container: { flex: 1, backgroundColor: "#fff" }, 
title: { color: "#fff", alignSelf: "flex-start", paddingLeft: RFValue(15), fontSize: RFValue(25), marginTop: RFValue(65) }, 
subtitle: { fontWeight: "bold", alignSelf: "flex-start", paddingLeft: RFValue(15), fontSize: RFValue(15) }, 
cardContainer: { flex: 1, borderRadius: RFValue(10), justifyContent: "center", height: RFValue(110), marginBottom: RFValue(20) } });