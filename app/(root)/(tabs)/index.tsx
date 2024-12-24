import { View, Text, Image, Touchable, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '@/constants/images'
import icons from '@/constants/icons'
import Search from '@/components/Search'
import { Cards, Featuredcard } from '@/components/Cards'
import Filters from '@/components/Filters'
import { cards, featuredCards } from '@/constants/data'
import { useGlobalContext } from '@/lib/globalProvider'

export default function Home() {

  const { user } = useGlobalContext();

  return (
    <SafeAreaView className='bg-white h-full'>
      <View className='px-5'>


        <View className='flex flex-row items-center justify-between mt-5'>
          <View className='flex flex-row items-center'>
            <Image source={{ uri: user?.avatar }} className='size-12 rounded-full' />
            <View className='flex flex-col items-start ml-2 justify-center'>
              <Text className='text-xs font-rubik text-black'>good morning</Text>
              <Text className='text-sm font-rubikMedium text-gray-600'>{user?.name }</Text>
            </View>
          </View>
          <Image source={icons.bell} className='size-7' />
        </View>

        <Search />

        <View className='my-5'>
          <View className='flex flex-row items-center justify-between'>
            <Text className='text-xl font-rubikBold text-black'>Featured</Text>
            <TouchableOpacity>
              <Text className='text-base text-blue-700 font-rubikBold'>See All</Text>
            </TouchableOpacity>
          </View>
        </View>

        <FlatList
          data={featuredCards}
          renderItem={({ item }) => <Featuredcard item={item} onPress={() => { }} />}
          horizontal
          showsHorizontalScrollIndicator={false}
        />

        <View className='my-5'>
          <View className='flex flex-row items-center justify-between'>
            <Text className='text-xl font-rubikBold text-black'>Recommendations</Text>
            <TouchableOpacity>
              <Text className='text-base text-blue-700 font-rubikBold'>Filters</Text>
            </TouchableOpacity>
          </View>
          <Filters />
        </View>

        <FlatList
          data={cards}
          renderItem={({ item }) => <Featuredcard item={item} onPress={() => { }} />}
          showsHorizontalScrollIndicator={false}
          horizontal
        />



      </View>



    </SafeAreaView>
  )
}