import React, {useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const Stocks = () => {
  const [buyList, setBuyList] = useState([]);

  const [stillBuyList, setStillBuyList] = useState([
    {id: '1', title: 'Apple'},
    {id: '2', title: 'Google'},
    {id: '3', title: 'Microsoft'},
  ]);

  const handleSell = item => {
    console.log('item===Sell==>', item);
  };

  const handleBuy = item => {
     const itemExistsInbuyList = buyList.find((buyItem) => buyItem.id ===  item.id) 
    if(itemExistsInbuyList){
        
    }

  };

  const renderSellItem = ({item}) => (
    <TouchableOpacity style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.title}</Text>
      <TouchableOpacity onPress={() => handleSell(item)}>
        <Text style={styles.sellText}>Sell</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  const renderItem = ({item}) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.title}</Text>
      <TouchableOpacity style={styles.buyButton} onPress={() => handleBuy(item)}>
        <Text style={styles.buyText}>Buy</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* First FlatList */}
      <View style={styles.flatListContainer}>
        <FlatList
          ListHeaderComponent={
            <View style={styles.headerContainer}>
              <Text style={styles.headerText}>Bought Stocks</Text>
            </View>
          }
          data={buyList}
          renderItem={renderSellItem}
          keyExtractor={item => item.id}
        />
      </View>

      {/* Second FlatList */}
      <View style={styles.flatListContainer}>
        <FlatList
          ListHeaderComponent={
            <View style={styles.headerContainer}>
              <Text style={styles.headerText}>All Stocks</Text>
            </View>
          }
          data={stillBuyList}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  flatListContainer: {
    flex: 1,
  },
  headerContainer: {
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.05)',
  },
  headerText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemText: {
    color: 'black',
    fontSize: 16,
  },
  sellText: {
    color: 'red',
    fontSize: 16,
  },
  buyButton: {
    backgroundColor: 'blue',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  buyText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Stocks;
