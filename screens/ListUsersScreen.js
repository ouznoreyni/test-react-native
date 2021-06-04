// import {Container, Content, List} from 'native-base';
import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import Card from '../components/Card';
import Screen from '../components/Screen';
import routes from '../navigation/routes';
import usersService from '../services/usersService';

const ListUsersScreen = ({navigation}) => {
  const [data, setData] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [pageSize, setPageSize] = useState(6);
  const [loadMoreData, setLoadMoreData] = useState(true);
  const [dataReceived, setDataReceived] = useState(false);
  const [showLoadingMore, setShowLoadingMore] = useState(false);
  const [shouldHit, setShouldHit] = useState(true);

  useEffect(() => {
    loadUsers();
  }, [data, pageNo]);

  loadUsers = async () => {
    if (pageNo != 1) {
      setShowLoadingMore(true);
    }
    const response = await usersService.getAll(pageNo);
    //add data to list and change the state to render new content
    let currentDataList = data;
    let receivedDataList = response.data.data;
    //append to existing list
    let newDataList = currentDataList.concat(receivedDataList);
    //render new list
    //once new list is set we are ready to load more data if bottom is reached
    setData(newDataList);
    setPageNo(response.data.page + 1);
    setLoadMoreData(true);
    setPageSize(response.data.total_pages);
    setDataReceived(true);
    setShowLoadingMore(false);
  };

  // const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
  //   const paddingToBottom = 40;
  //   let result =
  //     layoutMeasurement.height + contentOffset.y >=
  //     contentSize.height - paddingToBottom;
  //   //true if the end is reached other wise false
  //   return result;
  // };

  // //initially display loader at the center
  // let listSection = (
  //   <View style={styles.container}>
  //     <ActivityIndicator size="large" color="#0000ff" />
  //   </View>
  // );
  // if (dataReceived) {
  //   if (data.length > 0) {
  //     listSection = data.map(user => {
  //       return (
  //         <Card
  //           key={user.id.toString()}
  //           user={user}
  //           imageUrl={user.avatar}
  //           thumbnailUrl={user.avatar}
  //           onPress={() => navigation.navigate(routes.USER_DETAILS, user)}
  //         />
  //       );
  //     });
  //   } else {
  //     listSection = null;
  //   }
  // }

  return (
    <Screen style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={user => user.id.toString()}
        renderItem={({item}) => {
          return (
            <Card
              key={item.first_name}
              user={item}
              imageUrl={item.avatar}
              thumbnailUrl={item.avatar}
              onPress={() => navigation.navigate(routes.USER_DETAILS, item)}
            />
          );
        }}
      />
    </Screen>
    // <Container style={{marginTop: 40}}>
    //   <Content
    //     onScroll={({nativeEvent}) => {
    //       if (isCloseToBottom(nativeEvent)) {
    //         //prevent multiple hits for same page number
    //         if (loadMoreData) {
    //           //bottom reached start loading data

    //           setLoadMoreData(false);
    //           loadUsers();
    //         }
    //       }
    //     }}>
    //     <List>{listSection}</List>
    //     {showLoadingMore ? (
    //       <ActivityIndicator size="large" color="#0000ff" />
    //     ) : null}
    //   </Content>
    // </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default ListUsersScreen;
