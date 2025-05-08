import { LightButton, Icon, Text, Name, State } from "./Light.styled";

export default function Light({ name, onToggleLight, isOn }) {
  return (
    <LightButton type="button" onClick={onToggleLight} $isOn={isOn}>
      <Icon $isOn={isOn}>💡</Icon>
      <Text>
        <Name>{name}</Name>
        <State>{isOn ? "On" : "Off"}</State>
      </Text>
    </LightButton>
  );
}
