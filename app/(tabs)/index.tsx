import Hero from '../../components/Hero/Hero'
import { ScrollView ,Text } from 'react-native';
import ProductList from '@/components/ProductList/ProductList';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <Hero />
      {/* <ProductList /> */}
    </ScrollView>
  );
}

