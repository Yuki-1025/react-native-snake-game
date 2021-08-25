import React from 'react';
import { View, Text } from 'react-native';
import { FaHeartbeat } from 'react-icons/fa';
// import FavoriteIcon from '@material-ui/icons/Favorite';

function Lives ({lives}) {
  let i = 0;
  let hearts = [...Array(lives)].map(()=> {
    return <FaHeartbeat key={i++}/>
    // return <FavoriteIcon fontSize="inherit" key={i++} />
  });

  return (
    <View style={{alignItems: 'flex-end'}}>
      <Text style={{ alignSelf: 'flex-end', fontSize: 18, color: 'red'}}>
        {hearts}
      </Text>
    </View>
  )
};

export default Lives;