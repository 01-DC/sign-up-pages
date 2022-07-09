import React, { useEffect, useState, useContext } from 'react';

const HomeContext = React.createContext();

const HomeProvider = ({ children }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [currentTimezone, setCurrentTimezone] = useState('');
  const [countrySelected, setCountrySelected] = useState('');
  const [college, setCollege] = useState('');
  const [graduationYear, setGraduationYear] = useState('');
  const [degree, setDegree] = useState('');
  const [major, setMajor] = useState('');
  const [username, setUsername] = useState('');
  const [alternateEmail, setAlternateEmail] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [altMobileNo, setAltMobileNo] = useState('');
  const [about, setAbout] = useState('');
  const [roles, setRoles] = useState([]);
  const [experience, setExperience] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const values = {
      name,
      email,
      password,
      currentTimezone,
      countrySelected,
      college,
      graduationYear,
      degree,
      major,
      username,
      alternateEmail,
      mobileNo,
      altMobileNo,
      about,
      roles,
      experience,
      skills,
    };
    localStorage.setItem('HomeContextValues', JSON.stringify(values));
  }, [
    name,
    email,
    password,
    currentTimezone,
    countrySelected,
    college,
    graduationYear,
    degree,
    major,
    username,
    alternateEmail,
    mobileNo,
    altMobileNo,
    about,
    roles,
    experience,
    skills,
  ]);

  return (
    <HomeContext.Provider
      value={{
        name,
        setName,
        email,
        setEmail,
        password,
        setPassword,
        currentTimezone,
        setCurrentTimezone,
        countrySelected,
        setCountrySelected,
        college,
        setCollege,
        graduationYear,
        setGraduationYear,
        degree,
        setDegree,
        major,
        setMajor,
        username,
        setUsername,
        alternateEmail,
        setAlternateEmail,
        mobileNo,
        setMobileNo,
        altMobileNo,
        setAltMobileNo,
        about,
        setAbout,
        roles,
        setRoles,
        experience,
        setExperience,
        skills,
        setSkills,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};

export const useGlobalHomeContext = () => {
  return useContext(HomeContext);
};

export { HomeContext, HomeProvider };
