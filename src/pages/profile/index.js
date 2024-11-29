import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';

export default function ProfileScreen() {
  const [followers, setFollowers] = useState(100);
  const [tweets, setTweets] = useState([]);
  const [activeTab, setActiveTab] = useState('Tweets');
  const [isLoading, setIsLoading] = useState(true);

  // Simulated fetch for profile data
  useEffect(() => {
    const fetchData = async () => {
      // Simulated tweet data
      const tweetData = [
        { id: '1', content: 'First tweet!', date: 'Nov 28' },
        { id: '2', content: 'Second tweet!', date: 'Nov 27' },
        { id: '3', content: 'Agus sedih bgt!', date: 'Nov 26' },
      ];
      // Simulate network delay
      setTimeout(() => {
        setTweets(tweetData);
        setIsLoading(false);
      }, 1000);
    };

    fetchData();
  }, []);

  // Automatic follower count increase
  useEffect(() => {
    const interval = setInterval(() => {
      setFollowers((prevFollowers) => prevFollowers + Math.floor(Math.random() * 10) + 1); // Increase randomly between 1 and 10
    }, 3000); // Update every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  const renderTabContent = () => {
    if (activeTab === 'Tweets') {
      return (
        <FlatList
          data={tweets}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.tweetContainer}>
              <Text style={styles.tweetText}>{item.content}</Text>
              <Text style={styles.tweetDate}>{item.date}</Text>
            </View>
          )}
        />
      );
    }
    if (activeTab === 'Media') {
      return (
        <FlatList
          data={tweets}
          numColumns={3}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Image
              source={{ uri: 'https://via.placeholder.com/100' }}
              style={styles.mediaImage}
            />
          )}
        />
      );
    }
    return <Text style={styles.likesPlaceholder}>No Likes yet!</Text>;
  };

  if (isLoading) {
    return (
      <View style={styles.loaderContainer}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.username}>twitter</Text>
      </View>

      <View style={styles.profileContainer}>
        <Image
          source={{ uri: 'https://via.placeholder.com/100' }}
          style={styles.profileImage}
        />
        <Text style={styles.bio}>Lintang Ananda</Text>
        <View style={styles.statsContainer}>
          <Text style={styles.statItem}>
            <Text style={styles.statNumber}>20</Text> Tweets
          </Text>
          <Text style={styles.statItem}>
            <Text style={styles.statNumber}>200</Text> Following
          </Text>
          <Text style={styles.statItem}>
            <Text style={styles.statNumber}>{followers}</Text> Followers
          </Text>
        </View>
      </View>

      <View style={styles.tabsContainer}>
        {['Tweets', 'Media', 'Likes'].map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tabButton, activeTab === tab && styles.activeTabButton]}
            onPress={() => setActiveTab(tab)}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === tab && styles.activeTabText,
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.contentContainer}>{renderTabContent()}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 15,
    backgroundColor: '#1DA1F2',
  },
  username: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileContainer: {
    alignItems: 'center',
    padding: 15,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  bio: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 15,
  },
  statItem: {
    fontSize: 14,
    color: '#333',
  },
  statNumber: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  tabButton: {
    paddingVertical: 10,
    flex: 1,
    alignItems: 'center',
  },
  activeTabButton: {
    borderBottomWidth: 2,
    borderColor: '#1DA1F2',
  },
  tabText: {
    fontSize: 14,
    color: '#555',
  },
  activeTabText: {
    fontWeight: 'bold',
    color: '#1DA1F2',
  },
  contentContainer: {
    flex: 1,
    padding: 15,
  },
  tweetContainer: {
    marginBottom: 15,
  },
  tweetText: {
    fontSize: 16,
    marginBottom: 5,
  },
  tweetDate: {
    fontSize: 12,
    color: '#555',
  },
  mediaImage: {
    width: 100,
    height: 100,
    margin: 5,
  },
  likesPlaceholder: {
    textAlign: 'center',
    fontSize: 16,
    color: '#aaa',
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 18,
    color: '#555',
  },
});