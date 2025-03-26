import { View , Text, StyleSheet, TouchableOpacity} from "react-native";

const primaryColor = "#0891b2";

type HabitCreateCardProp = {
  id:string;
  title:string;
  description: string;
  count:string,
  onPress?:  () => void;
}

const HabitCreateCard = ({id,title, description, count,onPress}:HabitCreateCardProp) => {
    return (
        <View style={style.habitCard}>
        <View style={style.habitCardContent}>
          <View>
            <Text style={style.title} >{title}</Text>
            <Text>{description}</Text>
          </View>
          <View>
            {id ?
            <TouchableOpacity style={style.habitCardButton}>
              <Text style={style.habitCardBUttonText}>Make Habit</Text>
            </TouchableOpacity> : '⏳' }
          </View>
        </View>
        <View style={style.habitCardInfo}>
          <Text>User Count</Text>
          <Text>{count}</Text>
        </View>
      </View>
    );
}

const style = StyleSheet.create({
    habitCard:{
        borderWidth:2,
        borderColor:'white',
        marginHorizontal:5,
      },
      habitCardContent:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        padding:5,
        backgroundColor:'white',
       
        
      },
      habitCardButton:{
        backgroundColor: primaryColor,
        alignItems: "center",
        padding: 5,
        borderRadius: 5,
      },
      habitCardBUttonText:{
        color:'white',
        padding:5,
      },
      habitCardInfo:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        padding:5,
      },
      title:{
        fontSize:20,
        fontFamily:"Kaushan-Regular"
      }
})

export default HabitCreateCard;