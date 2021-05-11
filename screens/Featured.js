/**
 * React Native Event Booking App UI - Featured Screnn
 * -> The screen can be seperated 4 sections
 * 
 * TODO:
 * [x] Build the header section
 * [x] Build the search section (TextInput)
 * [x] Build the FEATURED section (Flatlist)
 * [x] Build the FOR YOU section 
 */
import React from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView,TextInput,FlatList,ImageBackground,TouchableWithoutFeedback} from 'react-native';
import moment from 'moment';
import {LinearGradient} from'expo-linear-gradient';
import styled from 'styled-components/native';
import {dummyData,FONTS,SIZES,COLORS,icons,images} from '../constants';
import {McText,McIcon,McAvatar} from '../components';
import { ScrollView } from 'react-native-gesture-handler';
const Featured = ({ navigation }) => {

  const _renderItem =({item,index})=>{
    return(
      <TouchableWithoutFeedback onPress={()=>{
        navigation.navigate('EventDetail',{selectedEvent:item});
      }}>
      <View style={{
        marginLeft:index=== 0?30:20,
        marginRight: index === dummyData.Events.length -1? 30:0
      }}>
        <EachFeature>
          <ImageBackground source={item.image}
          resizeMode='cover'
          //borderRadius= '15'
          style={{
            width:SIZES.width /2 + 40,
            height:SIZES.height /4 +40,
            justifyContent:'space-between',
            borderRadius:15
          }}
          >
          
          <View style={{
            alignItems:'flex-end',
            marginHorizontal:15,
            marginVertical:15,

          }}>
          <DateBox>
            <McText body5 color={COLORS.black} style={{opacity:0.5,letterSpacing:2}}>
              {moment(item.startingTime).format('MMM').toUpperCase()
              }</McText>
            <McText h2 color={COLORS.black}>{moment(item.startingTime).format('DD')}</McText>
          </DateBox>
          </View>
          
          
          <View style={{
            marginLeft:20,
            marginRight:25,
            marginBottom:20,
          }}>
            <McText body5 style= {{opacity:0.5}}>{item.type}</McText>
            <McText h2>{item.title}</McText>
          </View>
          </ImageBackground>
          </EachFeature>
      </View>
      </TouchableWithoutFeedback>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
    {/*Header Section */}
    <SectionHeader>
      <View>
        <McText body5 style={{opacity:0.5}}>
                December 21 9:10PM
        </McText>
        <McText>Explore events</McText>
      </View>
      <McAvatar source={images.avatar}/>
    </SectionHeader>
    {/*Seach section */}
    <SearchSection>
    <SearchView>
        <McIcon source={icons.search} size={24}/>
          <TextInput 
          placeholder="Search..." placeholderTextColor={COLORS.gray1} style={{
            fontSize:17,
            color: COLORS.white,
            width:300 
            }}>
          </TextInput>
        <McIcon source={icons.filter}size={24}/>
    </SearchView>
    </SearchSection>
    <ScrollView>
    {/*Featerd */}
    <SectionTitle>
      <McText h5>FEATURED</McText>
    </SectionTitle>
    <View>
      <FlatList
      horizontal
      contentContainerStyle={{}}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item)=>'event_'+item.id}
      data = {dummyData.Events}
      renderItem={_renderItem}
      ></FlatList>
    </View>
    {/*Featerd */}
    <SectionTitle>
      <McText h5>YOUR FAVORITE</McText>
    </SectionTitle>
    <View>
      <FlatList
      horizontal
      contentContainerStyle={{}}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item)=>'event_'+item.id}
      data = {dummyData.FavoriteEvents}
      renderItem={_renderItem}
      ></FlatList>
    </View>
    
    {/*For You Section */}
    <SectionTitle>
      <McText h5>For You</McText>
    </SectionTitle>
    <LinearGradient
      colors={COLORS.linear}
      start = {{x:0,y:0}}
      end = {{x:1, y:1}}
      style={{
        height: 120,
        marginHorizontal:30,
        borderRadius:15,
        justifyContent:'center',
        alignItems:'center'
      }}
    > 
      <View style={{
        flexDirection:'row',
        marginHorizontal:30,
        marginLeft:-30,
        justifyContent:'center',
        alignItems:'center'
        }}>
        <GiftBox >
          <McIcon source={icons.gift}size={24}/>
        </GiftBox>
        <View style={{
          marginLeft:50
        }}>
          <McText h3>Claim a free Class </McText>
          <McText body4 style={{width:180}}>Share an event to your friends</McText>
        </View>
      </View>

    </LinearGradient>
    <View style={{
      height:150,
    }}>

    </View>
    </ScrollView>
    </SafeAreaView>
  );
};
const SectionHeader =  styled.View`
  padding: 16px ${SIZES.padding};
  justify-content: space-between;
  align-items:center;
  flex-direction: row;
`;
const SearchSection = styled.View`
  margin : 4px ${SIZES.padding};
  height: 50px;
  background-color: ${COLORS.input};
  border-radius: 15px;
  `;
const SearchView = styled.View`
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
  margin-left:9px;
  margin-right:15px;
  margin-top:9px;
`;
const SectionTitle = styled.View`
  margin: 20px ${SIZES.padding}
`;
const DateBox = styled.View`
  width : 60px;
  height: 60px;
  border-radius: 15px;
  background-color: ${COLORS.white};
  justify-content: center;
  align-items: center;
`;
const EachFeature = styled.View`
  border-radius: 15px;
`;
const GiftBox = styled.View`
width : 50px;
height: 50px;
border-radius: 15px;
background-color: ${COLORS.white};
justify-content: center;
align-items: center;
`;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
});

export default Featured;
