const getAge = (dateString: string) => {
  const today = new Date();
  const birthDate = new Date(dateString);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

export const about = {
  picture: '/avatar.jpg',
  description: [
    `Experienced Backend Engineer with over 3 years of hands-on experience in designing, developing, and optimizing high-performance software applications. Proficient in backend technologies and programming languages including Go, PHP, JavaScript, Laravel, Node.js, as well as relational and non-relational databases (SQL and NoSQL). Demonstrated ability to build scalable system architectures, develop robust APIs, and improve application performance in large-scale production environments.`
  ],
};
