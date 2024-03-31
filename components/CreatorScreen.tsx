import { Text, View } from "react-native";
import { NavigationProp, RouteProp } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { memes } from "../assets/list";
import { ScrollView } from "native-base";
import MemeSelector from "./MemeSelector";
import { Meme } from "../hooks/useApi";

interface RouterProps {
  navigation: NavigationProp<any, any>;
  route: RouteProp<{ params: { meme: string } }, "params">;
}

const CreatorScreen = ({ route }: RouterProps) => {
  const [selected, setSelected] = useState<any>();
  const [selectedName, setSelectedName] = useState<string>();

  useEffect(() => {
    const { meme } = route.params || { meme: "10-Guy" };
    setSelected(memes[meme]);
    setSelectedName(meme);
  }, [route]);

  const memeSelected = (meme: Meme) => {
    setSelected(meme.image);
    setSelectedName(meme.name);
  };

  return (
    <ScrollView>
      <MemeSelector
        onSelect={(meme) => memeSelected(meme)}
        activeMeme={selectedName}
      />
    </ScrollView>
  );
};

export default CreatorScreen;
