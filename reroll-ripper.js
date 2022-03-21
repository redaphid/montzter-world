// ==UserScript==
// @name        Reroll - Extract Summary
// @namespace   Violentmonkey Scripts
// @match       https://app.reroll.co/*
// @require     https://code.jquery.com/jquery-3.6.0.min.js
// @grant       none
// @version     1.0
// @author      The Red Aphid
// @description 3/20/2022, 9:03:03 PM
// ==/UserScript==

const getImgUrl = (charNode) =>{
  const imgStyle = $(charNode).find('.generated-preview').attr('style')
  const imgUrl = imgStyle.split('"')[1]
  return imgUrl
}
const ripCharData = (_, charNode)=> {
 const imgUrl = getImgUrl(charNode)
 console.log({imgUrl})
}

const letsGo = ()=>{
 const chars = 
       $('.character-selector').map(ripCharData)
}
setTimeout(letsGo, 1500)
