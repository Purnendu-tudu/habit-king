import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

const AboutUs = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Heading */}
      <Text style={styles.title}>🏆 About Habit King</Text>
      <Text style={styles.paragraph}>
        At <Text style={styles.bold}>Habit King</Text>, we believe that success is built one habit at a time. Our
        mission is to empower individuals to take control of their lives by developing positive routines that lead to
        lasting change. Whether you're striving to boost productivity, improve your health, or cultivate mindfulness,
        <Text style={styles.bold}> Habit King</Text> provides the tools and guidance to help you stay consistent and
        achieve your goals.
      </Text>

      {/* Vision */}
      <Text style={styles.subtitle}>🎯 Our Vision</Text>
      <Text style={styles.paragraph}>
        We envision a world where everyone has the power to shape their future by mastering the habits that matter most.
        Through intuitive habit-tracking solutions and personalized insights, we aim to inspire individuals to unlock
        their full potential and lead more fulfilling lives.
      </Text>

      {/* What We Offer */}
      <Text style={styles.subtitle}>🚀 What We Offer</Text>
      <Text style={styles.listItem}>✅ Customizable Habit Tracking: Set, monitor, and analyze your progress with ease.</Text>
      <Text style={styles.listItem}>📈 Actionable Insights: Get data-driven suggestions to enhance your habits.</Text>
      <Text style={styles.listItem}>💡 Daily Motivation: Stay inspired with personalized reminders and motivational messages.</Text>
      <Text style={styles.listItem}>🤝 Community Support: Connect with like-minded individuals who share your journey.</Text>

      {/* Why Choose Us */}
      <Text style={styles.subtitle}>💡 Why Choose Habit King?</Text>
      <Text style={styles.listItem}>🕰️ Simplicity Meets Power: Our platform is user-friendly, making habit building natural.</Text>
      <Text style={styles.listItem}>🔥 Results-Driven Approach: We leverage behavioral science for sustainable progress.</Text>
      <Text style={styles.listItem}>🌟 Committed to Growth: We're always innovating to improve your experience.</Text>

      {/* Call to Action */}
      <Text style={styles.subtitle}>🤝 Join Us Today!</Text>
      <Text style={styles.paragraph}>
        Ready to take control of your life? Join <Text style={styles.bold}>Habit King</Text> and start building the
        habits that will transform your future. Whether you're looking to create positive routines or break bad habits,{' '}
        <Text style={styles.bold}>Habit King</Text> is here to guide you every step of the way.
      </Text>

      {/* Footer */}
      <Text style={styles.footer}>👑 Master Your Habits. Master Your Life.</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#4B5563',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 5,
    color: '#374151',
  },
  paragraph: {
    fontSize: 14,
    lineHeight: 22,
    color: '#4B5563',
    marginBottom: 10,
  },
  listItem: {
    fontSize: 14,
    color: '#4B5563',
    marginBottom: 5,
  },
  bold: {
    fontWeight: 'bold',
  },
  footer: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1F2937',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default AboutUs;
