package com.example.cross

uses com.example.CustomFixture

class UsesCustomFixture {
  var fixture : CustomFixture

  construct() {
    fixture = new CustomFixture("demo")
  }
}
