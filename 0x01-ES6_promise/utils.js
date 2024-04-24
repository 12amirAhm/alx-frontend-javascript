// utils.js

// Simulated functions returning promises
function uploadPhoto() {
  return new Promise((resolve, reject) => {
    // Simulating photo upload
    setTimeout(() => {
      resolve({ body: { photo: 'photo-profile-1' } });
    }, 1000); // Simulating 1 second delay
  });
}

function createUser() {
  return new Promise((resolve, reject) => {
    // Simulating user creation
    setTimeout(() => {
      resolve({ body: { firstName: 'Guillaume', lastName: 'Salva' } });
    }, 1500); // Simulating 1.5 second delay
  });
}

export { uploadPhoto, createUser };

