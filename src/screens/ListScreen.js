import React, { useEffect, useCallback, useState, useMemo } from "react";
import styled from "styled-components";
import * as ListActions from "../../store/actions/listActions";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import ListBox from "../components/lists/ListBox";
import { FlatList } from "react-native";
import { API, graphqlOperation } from "aws-amplify";
import {
  onUpdateList,
  onDeleteList,
  onCreateList
} from "./../graphql/subscriptions";

const ListScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const allList = useSelector(state => state.list.lists);
  const user = useSelector(state => state.auth.user);
  // const [todayList, setTodayList] = useState("");

  const todayDate = moment()
    .startOf("day")
    .format("YYYY-MM-DD");

  let todayList = [];

  useEffect(() => {
    getListsRedux();
    const createListcreationListener = API.graphql(
      graphqlOperation(onCreateList, { owner: user.username })
    ).subscribe({
      next: async listData => {
        const updatedData = listData.value.data.onCreateList;
        await dispatch(ListActions.createListListnerAWS(updatedData));
      }
    });
    const createListUpdateListener = API.graphql(
      graphqlOperation(onUpdateList, { owner: user.username })
    ).subscribe({
      next: async listData => {
        const updatedData = listData.value.data.onUpdateList;
        await dispatch(ListActions.updateListListnerAWS(updatedData, allList));
      }
    });
    const createListDeleteListener = API.graphql(
      graphqlOperation(onDeleteList, { owner: user.username })
    ).subscribe({
      next: async listData => {
        const updatedData = listData.value.data.onDeleteList;
        return await dispatch(
          ListActions.updateListListnerAWS(updatedData, allList)
        );
      }
    });

    return () => {
      createListcreationListener.unsubscribe();
      createListUpdateListener.unsubscribe();
      createListDeleteListener.unsubscribe();
    };
  }, [dispatch]);

  const getListsRedux = useCallback(async () => {
    await dispatch(ListActions.getAllListAWS());
  }, [dispatch, allList]);

  console.log(allList);
  if (allList) {
    todayList = allList.filter(list => {
      const listDate = moment(list.createdDate).format("YYYY-MM-DD");
      return listDate == todayDate;
    });
  }

  const headerComp = () => {
    return (
      <>
        <Title> Today's List</Title>
        {todayList ? (
          todayList.map(today => (
            <Button
              key={today.id}
              onPress={() => navigation.navigate("List", { list: today })}
            >
              <ListBox list={today} />
            </Button>
          ))
        ) : (
          <ListBox />
        )}

        <Title> All List</Title>
      </>
    );
  };

  return (
    <Container>
      {allList ? (
        <FlatList
          data={allList}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Button onPress={() => navigation.navigate("List", { list: item })}>
              <ListBox list={item} />
            </Button>
          )}
          ListHeaderComponent={headerComp}
        />
      ) : (
        <ListBox />
      )}
      {/* {allList
          ? allList.map(list => <ListBox key={list.id} list={list} />)
          : null} */}
    </Container>
  );
};

export default ListScreen;

const Container = styled.View`
  flex-grow: 1;
  background: #24273c;
`;

const Title = styled.Text`
  color: #ff6363;
  font-size: 32px;
  padding-left: 30px;
  padding-top: 20px;
`;

const Button = styled.TouchableOpacity``;
const List = styled.View``;
const ListTitle = styled.Text`
  font-size: 36px;
  color: white;
  padding-right: 30px;
  /* width: 180px; */
  text-align: right;
`;
