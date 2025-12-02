// common.js - LocalStorage auth and helpers
function saveToLS(key, val){ localStorage.setItem(key, JSON.stringify(val)); }
function readFromLS(key){ try{ return JSON.parse(localStorage.getItem(key)) || null }catch(e){ return null } }
function requireLogin(){ const u = readFromLS('loggedUser'); if(!u) location.href='login.html'; return u; }
function logout(){ localStorage.removeItem('loggedUser'); location.href='login.html'; }
function formatDate(ts){ const d=new Date(ts); return d.toLocaleString(); }
