import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useEffect} from 'react';

const CartLogic = () => {
  const [productsInCart, setProductsIncart] = useState<any>([]);
  const [totalPrice, setTotalPrice] = useState<string>('');

  const data = [
    {
      id: 1,
      name: 'Product 1',
      price: 100,
    },
    {
      id: 2,
      name: 'Product 2',
      price: 200,
    },
    {
      id: 3,
      name: 'Product 3',
      price: 300,
    },
  ];

  const checkProduct = (
    item: {id: any; name?: string; price?: number},
    arr: any[],
  ) => {
    const productExists = arr.find(cartItem => cartItem.id === item.id);

    if (productExists) {
      const updatedCart = arr.map(cartItem =>
        cartItem.id === item.id
          ? {...cartItem, quantity: cartItem.quantity + 1}
          : cartItem,
      );
      setProductsIncart(updatedCart);
    } else {
      setProductsIncart([...arr, {...item, quantity: 1}]);
    }
  };

  useEffect(() => {
    const totaCartlPrice = productsInCart.reduce(
      (acc: number, x: {quantity: number; price: number}) =>
        acc + x.quantity * x.price,
      0,
    );
    setTotalPrice(totaCartlPrice);
  }, [productsInCart]);

  const renderProductItem = ({item}: {item: any}) => (
    <View style={styles.productContainer}>
      <View>
        <Text style={styles.text}>{item.name}</Text>
        <Text style={styles.text}>{item.price}</Text>
      </View>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => checkProduct(item, productsInCart)}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );

  const renderCartItem = ({item}: {item: any}) => (
    <View style={styles.productContainer}>
      <View>
        <Text style={styles.text}>{item.name}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.text}>{item.price} *</Text>
          <Text style={styles.text}> {item.quantity}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.buttonText}>{item.price * item.quantity}</Text>
      </TouchableOpacity>
    </View>
  );

  const renderFooter = () => (
    <View style={styles.footer}>
      <Text style={styles.totalText}>Total: {totalPrice}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>CartLogic</Text>
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={renderProductItem}
      />
      <View style={styles.cartContainer}>
        <FlatList
          data={productsInCart}
          keyExtractor={item => item.id}
          ListFooterComponent={renderFooter}
          renderItem={renderCartItem}
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
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  productContainer: {
    padding: 10,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 8,
    borderColor: '#ddd',
  },
  text: {
    color: 'black',
    marginVertical: 2,
  },
  addButton: {
    backgroundColor: 'blue',
    height: 50,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
  },
  cartContainer: {
    bottom: 0,
    height: 200,
    backgroundColor: 'grey',
    position: 'absolute',
    width: '100%',
  },
  footer: {
    height: 30,
    width: '100%',
    padding: 5,
  },
  totalText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  priceContainer: {flexDirection: 'row', alignItems: 'center'},
});

export default CartLogic;
