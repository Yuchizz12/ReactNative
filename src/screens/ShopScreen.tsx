import React, { useEffect, useContext, useState } from "react";
import { StyleSheet, SafeAreaView, FlatList,Text } from "react-native";
import { getReviews } from "../lib/firebase";
import { ReviewsContext } from "../contexts/reviewsContext";
/* components */
import { ShopDetail } from "../components/ShopDetail";
import { FloatingActionButton } from "../components/FloatingActionButton";
import { ReviewItem } from "../components/ReviewItem";
/* types */
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../types/navigation";
import { StackNavigationProp } from "@react-navigation/stack";
import { Review } from "../types/review";

type Props = {
  navigation: StackNavigationProp<RootStackParamList, "Shop">;
  route: RouteProp<RootStackParamList, "Shop">;
};

export const ShopScreen: React.FC<Props> = ({ navigation, route }: Props) => {
  const { shop } = route.params;
  // const [reviews, setReviews] = useState<Review[]>([]);
  const { reviews, setReviews } = useContext(ReviewsContext);
  
  useEffect(() => {
      navigation.setOptions({title:shop.name})
    }, [shop])
  
  const fetchReviews = async () => {
    const reviews = await getReviews(shop.id);
    setReviews(reviews);
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* <ShopDetail shop={shop}/> */}
      <FlatList
        ListHeaderComponent={<ShopDetail shop={shop} />}
        data={reviews}
        renderItem={({ item }) => <ReviewItem review={item} />}
        keyExtractor={(item) => item.id}
      />
      <FloatingActionButton
        iconName="plus"
        onPress={() => navigation.navigate("CreateReview", { shop })}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
  },
});
