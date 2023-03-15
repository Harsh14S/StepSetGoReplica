import { Alert, Dimensions, Image, ImageBackground, Platform, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Colors from '../../Assets/Colors'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { CarouselData, ImageLinks } from '../../Assets/DataSets';


export default LogIn = ({ navigation }) => {
  // const [sliderState, setSliderState] = useState({ currentPage: 0 });
  const [sliderState, setSliderState] = useState({ currentPage: 0 });
  const width = Dimensions.get('screen').width;
  const setSliderPage = ({ nativeEvent }) => {
    const { currentPage } = sliderState;
    const { x } = nativeEvent.contentOffset;
    const indexOfNextScreen = Math.floor(x / width);
    if (indexOfNextScreen !== currentPage) {
      setSliderState({
        ...sliderState,
        currentPage: indexOfNextScreen,
      });
    }
  };

  const { currentPage: pageIndex } = sliderState;

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <ScrollView
          style={styles.carouselImagesContainer}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          scrollEventThrottle={1}
          onScroll={(nativeEvent) => {
            setSliderPage(nativeEvent);
          }}
        >
          {
            CarouselData.map((item, index) => (
              <ImageBackground style={styles.carouselItems} key={index} source={item.img}>
                <View style={styles.txtBoxContainer}>
                  <Text style={styles.titleTxt}>{item.titleTxt}</Text>
                  <Text style={styles.infoTxt}>{item.infoTxt}</Text>
                </View>
              </ImageBackground>
            ))
          }
        </ScrollView>
        <View style={styles.paginationContainer}>
          {
            CarouselData.map((item, key) => (
              <Image
                key={key}
                source={ImageLinks.Dash}
                style={[styles.pagingIndicatorImg, { tintColor: key === sliderState.currentPage ? Colors.darkSkyblue : Colors.darkGrey }]}
                resizeMode={'contain'}
              />
            ))
          }
        </View>
        <Image
          source={ImageLinks.SSGLogo}
          style={styles.SSGlogo}
          resizeMode={'contain'}
        />
      </View>
      <View style={styles.bottomContainer}>
        <Pressable style={styles.googleContainer}
          onPress={() => navigation.navigate('home')}
        >
          <Image
            style={styles.googleLogo}
            source={ImageLinks.Google}
            resizeMode={'contain'}
          />
          <Text style={styles.googleTxt}>Continue with Google</Text>
        </Pressable>
        <Pressable style={styles.emailContainer}
          onPress={() => navigation.navigate('home')}
        >
          <View style={styles.emailLogoContainer}>
            <Image
              style={styles.emailLogo}
              source={ImageLinks.AtTheRate}
              resizeMode={'contain'}
            />
          </View>
          <Text style={styles.emailTxt}>Continue with Email</Text>
        </Pressable>
        <Pressable style={styles.recoveryContainer}>
          <Text style={styles.forgotTxt}>Can't remember your email Address?</Text>
          <Text style={styles.recoverTxt}>Recover Account</Text>
        </Pressable>
        <Text style={styles.versionTxt}>v0.9.154 (730)</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    paddingVertical: Platform.OS === 'ios' ? RFPercentage(5) : null,
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    overflow: 'hidden',
  },
  SSGlogo: {
    height: RFPercentage(6),
    width: RFPercentage(18),
    tintColor: Colors.white,
    position: 'absolute'
  },
  carouselImagesContainer: {
    flex: 1,
  },
  carouselItems: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: Dimensions.get('screen').width,
    flex: 1,
  },
  carouselImages: {
  },
  paginationContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    marginBottom: RFPercentage(1),
  },
  pagingIndicatorImg: {
    height: RFPercentage(2),
    width: RFPercentage(2),
    marginHorizontal: RFPercentage(0.5),
    tintColor: Colors.darkGrey
  },
  pagingIndicatorImgActive: {
    height: RFPercentage(2),
    width: RFPercentage(2),
    marginHorizontal: RFPercentage(0.5),
    tintColor: Colors.darkSkyblue
  },
  txtBoxContainer: {
    marginBottom: RFPercentage(4),
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: RFPercentage(6),
    // bottom
  },
  titleTxt: {
    color: Colors.darkSkyblue,
    fontSize: RFPercentage(2.5),
    fontFamily: 'Montserrat-SemiBold',
    borderRadius: RFPercentage(0.5),
    textAlign: 'center',
    // fontWeight: '600',
  },
  infoTxt: {
    fontSize: RFPercentage(1.7),
    fontFamily: 'Montserrat-Regular',
    color: Colors.white,
    marginTop: RFPercentage(1),
    textAlign: 'center',
    // fontWeight: '600',
  },
  bottomContainer: {
    // flex: ,
    backgroundColor: Colors.darkGrey,
    borderTopLeftRadius: RFPercentage(3),
    borderTopRightRadius: RFPercentage(3),
    overflow: 'hidden',
    paddingTop: RFPercentage(2.5),
    paddingHorizontal: RFPercentage(2.8),
    alignItems: 'center',
    paddingBottom: RFPercentage(2.8)
  },
  googleContainer: {
    padding: RFPercentage(1.5),
    borderRadius: RFPercentage(1.5),
    backgroundColor: Colors.white,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: RFPercentage(3)
  },
  googleLogo: {
    height: RFPercentage(3),
    width: RFPercentage(3),
  },
  googleTxt: {
    flex: 1,
    color: Colors.black,
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: RFPercentage(1.9),
  },
  emailContainer: {
    padding: RFPercentage(1.2),
    borderRadius: RFPercentage(1.5),
    backgroundColor: Colors.black,
    flexDirection: 'row',
    justifyContent: 'center',
    borderWidth: RFPercentage(0.2),
    borderColor: Colors.white
  },
  emailLogoContainer: {
    padding: RFPercentage(0.5),
    backgroundColor: Colors.white,
    overflow: 'hidden',
    borderRadius: RFPercentage(10),
  },
  emailLogo: {
    height: RFPercentage(2),
    width: RFPercentage(2),
  },
  emailTxt: {
    flex: 1,
    color: Colors.white,
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: RFPercentage(1.9),
  },
  forgotTxt: {
    color: 'grey',
    paddingVertical: RFPercentage(0.5),
    marginTop: RFPercentage(2),
    fontSize: RFPercentage(2),
  },
  recoveryContainer: {
    alignItems: 'center',
  },
  recoverTxt: {
    fontSize: RFPercentage(2),
    color: Colors.white,
    borderBottomColor: 'white',
    borderBottomWidth: RFPercentage(0.08),
    marginTop: RFPercentage(0.3),
  },
  versionTxt: {
    color: 'darkgrey',
    marginTop: RFPercentage(1.5),
    fontSize: RFPercentage(1.5),
  },
})
