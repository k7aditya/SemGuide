export const account = {};

const fetchUserDetails = async () => {
  const token = localStorage.getItem('token');
  console.log(token);
  if (!token) {
    console.error('Token not found in local storage');
    return null;
  }
  try {
    const response = await fetch('https://semguide-zbku.onrender.com/api/userdetails/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token }),
    });
    if (!response.ok) {
      console.error('Failed to fetch user details:', response.statusText);
      return null;
    }
    const userData = await response.json();
    console.log(userData);
    return userData;
  } catch (error) {
    console.error('Error fetching user details:', error.message);
    return null;
  }
};

const populateAccount = async () => {
  try {
    const userData = await fetchUserDetails();
    if (!userData) {
      console.error('Failed to fetch user data');
      return;
    }

    account.displayName = userData.username;
    account.photoURL = '/assets/images/avatars/avatar_25.jpg'; // You may want to update this with the actual photo URL
    account.email = userData.email;
    account.branch = userData.first_name;
  } catch (error) {
    console.error('Error populating account:', error.message);
  }
};

populateAccount();
