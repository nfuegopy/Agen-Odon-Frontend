<template>
    <div>
      <nav class="navbar">
        <router-link to="/">Home</router-link>
        <router-link to="/patients">Patients</router-link>
        <router-link to="/doctors">Doctors</router-link>
        <router-link to="/appointment-types">Appointment Types</router-link>
        <router-link to="/calendar">Calendar</router-link>
      </nav>
      <main>
        <router-view/>
      </main>
    </div>
  </template>
  
  <style>
  .navbar {
    display: flex;
    justify-content: space-around;
    background-color: #4CAF50;
    padding: 1em;
  }
  .navbar a {
    color: white;
    font-weight: bold;
    text-decoration: none;
  }
  .navbar a.router-link-exact-active {
    text-decoration: underline;
  }
  main {
    padding: 2em;
  }
  </style>
  