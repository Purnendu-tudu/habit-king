import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import React from 'react'

const TabsBar = ({state, descriptors, navigation}) => {

    const primaryColor = "#0891b2";
    const greyColor = "#737373";

    const icons  = {
        index : (props) => <AntDesign name='home' size={20} color={greyColor} {...props} />,
        habitCreate : (props) => <AntDesign name='bulb1' size={20} color={greyColor} {...props} />,
        about : (props) => <AntDesign name='smileo' size={20} color={greyColor} {...props} />,
    }


    return (
        <View style={styles.tabBar}>
          {state.routes.map((route, index) => {
            const { options } = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.name;
            
            if(['_sitemap','+not-found'].includes(route.name)) return null; // this line added later
            const isFocused = state.index === index;
            
            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });
    
              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name, route.params);
              }
            };
    
            const onLongPress = () => {
              navigation.emit({
                type: 'tabLongPress',
                target: route.key,
              });
            };
    
            return (
              <TouchableOpacity
                key={route.name}
                
                accessibilityRole="button"
                accessibilityState={isFocused ? { selected: true } : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
                style={styles.tabBarItem}
              >
                {
                    icons[route.name]({
                        color: isFocused ? primaryColor : greyColor
                    })
                }
                <Text style={{ color: isFocused ? primaryColor : greyColor }}>
                  {label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      );
}

const styles = StyleSheet.create({
    tabBar:{
        position:'absolute',
        bottom:5,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'white',
        marginHorizontal:10,
        paddingVertical:10,
        borderRadius:35,
        borderColor:'black',
        borderCurve:'continuous',
        
    },
    tabBarItem:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }
});

export default TabsBar