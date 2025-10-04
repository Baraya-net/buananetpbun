document.querySelector("#year").innerHTML = new Date().getFullYear();

document.querySelector("#year").innerHTML = new Date().getFullYear();
window.onload = function () {
  createCaptchaSignIn();
  createCaptchaSignUp();
};
var code_signin;
function createCaptchaSignIn() {
  document.getElementById("captcha-signin").innerHTML = '';
  var _0x89fc9b = [];
  for (var _0x2b03f5 = 0x0; _0x2b03f5 < 0x4; _0x2b03f5++) {
    var _0x4fee7e = Math.floor(Math.random() * "0123456789".length);
    if (_0x89fc9b.indexOf("0123456789"[_0x4fee7e]) == -0x1) {
      _0x89fc9b.push("0123456789"[_0x4fee7e]);
    } else {
      _0x2b03f5--;
    }
  }
  var _0x399e69 = document.createElement("canvas");
  _0x399e69.id = "captcha";
  _0x399e69.width = 0x96;
  _0x399e69.height = 0x28;
  var _0x446b8e = _0x399e69.getContext('2d');
  _0x446b8e.font = "38px verdana";
  var _0x48e6db = _0x446b8e.createLinearGradient(0x0, 0x0, _0x399e69.width, 0x0);
  _0x48e6db.addColorStop('0', 'magenta');
  _0x48e6db.addColorStop("0.5", "pink");
  _0x48e6db.addColorStop("1.0", "red");
  _0x446b8e.strokeStyle = _0x48e6db;
  _0x446b8e.lineWidth = 0x2;
  ["round", "bevel", 'miter'].forEach((_0x321317, _0x485d68) => {
    _0x446b8e.lineJoin = _0x321317;
    _0x446b8e.beginPath();
    _0x446b8e.moveTo(0x0, 0x0);
    _0x446b8e.lineTo(0x8c, 0x28);
    _0x446b8e.stroke();
  });
  _0x446b8e.strokeText(_0x89fc9b.join(''), 0x14, 0x23);
  code_signin = _0x89fc9b.join('');
  document.getElementById("captcha-signin").appendChild(_0x399e69);
}
var code_signup;
function createCaptchaSignUp() {
  document.getElementById('captcha-signup').innerHTML = '';
  var _0x5a56b7 = [];
  for (var _0x2f6667 = 0x0; _0x2f6667 < 0x4; _0x2f6667++) {
    var _0x29193 = Math.floor(Math.random() * "0123456789".length);
    if (_0x5a56b7.indexOf("0123456789"[_0x29193]) == -0x1) {
      _0x5a56b7.push("0123456789"[_0x29193]);
    } else {
      _0x2f6667--;
    }
  }
  var _0x392523 = document.createElement("canvas");
  _0x392523.id = "captcha";
  _0x392523.width = 0x96;
  _0x392523.height = 0x28;
  var _0x32e516 = _0x392523.getContext('2d');
  _0x32e516.font = "38px verdana";
  var _0x5ce31a = _0x32e516.createLinearGradient(0x0, 0x0, _0x392523.width, 0x0);
  _0x5ce31a.addColorStop('0', "magenta");
  _0x5ce31a.addColorStop("0.5", "pink");
  _0x5ce31a.addColorStop("1.0", "red");
  _0x32e516.strokeStyle = _0x5ce31a;
  _0x32e516.lineWidth = 0x2;
  ["round", 'bevel', 'miter'].forEach((_0x381f31, _0x590928) => {
    _0x32e516.lineJoin = _0x381f31;
    _0x32e516.beginPath();
    _0x32e516.moveTo(0x0, 0x0);
    _0x32e516.lineTo(0x8c, 0x28);
    _0x32e516.stroke();
  });
  _0x32e516.strokeText(_0x5a56b7.join(''), 0x14, 0x23);
  code_signup = _0x5a56b7.join('');
  document.getElementById('captcha-signup').appendChild(_0x392523);
}
document.querySelector('#cpatchaTextBoxSignIn').addEventListener("keyup", _0x270254 => {
  if (event.keyCode === 0xd) {
    _0x270254.preventDefault();
    login();
  }
});
document.querySelector("#cpatchaTextBoxSignUp").addEventListener('keyup', _0x18700f => {
  if (event.keyCode === 0xd) {
    _0x18700f.preventDefault();
    register();
  }
});
var modal_click = document.querySelector('#myModal');
var span_click = document.getElementsByClassName("close")[0x0];
function CallModalChangePasswordShow() {
  document.querySelector("#myChangePassword").style.display = "block";
}
function CallModalChangePasswordHide() {
  document.querySelector('#myChangePassword').style.display = 'none';
}
function CallModalChangeProfileShow() {
  document.querySelector("#myChangeProfile").style.display = 'block';
  document.querySelector('#profile-name').value = document.querySelector('#your-name').innerHTML;
  document.querySelector("#profile-url").value = document.querySelector("#myavatar").src;
}
function CallModalChangeProfileHide() {
  document.querySelector("#myChangeProfile").style.display = "none";
}
function callmodal() {
  modal_click.style.display = "block";
}
span_click.onclick = function () {
  modal_click.style.display = "none";
};
window.onclick = function (_0x5f0487) {
  if (_0x5f0487.target == modal_click) {
    modal_click.style.display = "none";
  }
};
var firebaseConfig = {
            apiKey: "AIzaSyC2pNYwwn0ildQ4MPlZJv1R6RaEOnKJ4Js",
            authDomain: "baraya-net.firebaseapp.com",
            databaseURL: "https://baraya-net-default-rtdb.firebaseio.com",
            projectId: "baraya-net",
            storageBucket: "baraya-net.firebasestorage.app",
            messagingSenderId: "512354998677",
            appId: "1:512354998677:web:9a91654572c97a958a7e9c"
        };
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const user = firebase.auth().currentUser;
const provider = new firebase.auth.GoogleAuthProvider();
document.querySelector("#google-sign-in").addEventListener("click", () => {
  firebase.auth().signInWithPopup(provider).then(function (_0x4ba032) {})['catch'](function (_0xe480a2) {});
});
document.querySelector("#verify").addEventListener("click", () => {
  var _0x5bb31c = {
    'url': 'https://buananetpbun.github.io/',
    'handleCodeInApp': false
  };
  firebase.auth().currentUser.sendEmailVerification(_0x5bb31c).then(function () {
    Alert.render("✔️ Verification link sent to your email. if you don't see it, please check your mail inbox in spam folder.");
  })['catch'](function (_0x3406d3) {
    var _0x1a9744 = _0x3406d3.message;
    Alert.render("❌ " + _0x1a9744);
  });
});
firebase.auth().onAuthStateChanged(_0x2f8ed4 => {
  if (_0x2f8ed4) {
    document.querySelector("#myProfile").style.display = 'block';
    document.querySelector('#user-id').innerHTML = firebase.auth().currentUser.uid;
    document.querySelector('#welcome-email').innerHTML = firebase.auth().currentUser.email;
    document.querySelector("#profile-email").innerHTML = firebase.auth().currentUser.email;
    document.querySelector("#your-name").innerHTML = firebase.auth().currentUser.displayName;
    document.querySelector("#myavatar").src = firebase.auth().currentUser.photoURL;
    if (firebase.auth().currentUser.photoURL == null) {
      document.querySelector("#myavatar").src = 'https://user-images.githubusercontent.com/42666125/199234814-c320e1fc-da95-489e-a955-43b82e3f4b46.png';
    }
    if (firebase.auth().currentUser.emailVerified == true) {
      document.querySelector("#verify").style.display = "none";
      document.querySelector('#email_Verified').innerHTML = " ✔️ <span style='color:#16C60C;font-weight:bold;'>ACTIVATED</span>";
    } else {
      document.querySelector("#email_Verified").innerHTML = " ❌ <span style='color:red;font-weight:bold;'>NOT ACTIVATED</span>";
    }
  } else {
    document.querySelector("#myLogin").style.display = "block";
  }
});
document.querySelector('#show-register').addEventListener("click", () => {
  showRegistration();
});
const showRegistration = () => {
  document.querySelector("#registration-page").classList.remove("hide");
  document.querySelector("#login-page").classList.add("hide");
  document.querySelector("#homepage").classList.add("hide");
  document.querySelector('#show-login').classList.remove("hide");
  document.querySelector("#show-register").classList.add("hide");
};
document.querySelector("#show-login").addEventListener("click", () => {
  showLogin();
});
const showLogin = () => {
  document.querySelector("#registration-page").classList.add("hide");
  document.querySelector('#login-page').classList.remove("hide");
  document.querySelector('#homepage').classList.add("hide");
  document.querySelector("#show-login").classList.add('hide');
  document.querySelector("#show-register").classList.remove('hide');
};
document.querySelector("#signout").addEventListener('click', () => {
  signOut();
});
const register = () => {
  const _0x5307c2 = document.querySelector('#registration-email').value;
  const _0xf82bd = document.querySelector('#registration-reemail').value;
  const _0x4e070b = document.querySelector("#registration-password").value;
  if (_0x5307c2.trim() == '') {
    Alert.render("❌ Enter E-mail.");
  } else {
    if (_0x4e070b.trim().length < 0x6) {
      Alert.render("❌ Password must be at least 6 characters.");
    } else if (_0x5307c2 != _0xf82bd) {
      Alert.render("❌ emails do not match.");
    } else {
      event.preventDefault();
      if (document.getElementById("cpatchaTextBoxSignUp").value == code_signup) {
        auth.createUserWithEmailAndPassword(_0x5307c2, _0x4e070b)["catch"](function (_0x2011c7) {
          var _0x13c9d5 = _0x2011c7.message;
          Alert.render("❌ " + _0x13c9d5);
        });
      } else {
        Alert.render("❌ Invalid Captcha. try Again");
        createCaptchaSignUp();
        document.getElementById("cpatchaTextBoxSignUp").value = '';
      }
    }
  }
};
document.querySelector("#register").addEventListener("click", () => {
  register();
});
document.querySelector("#registration-password").addEventListener('keyup', _0x5396c9 => {
  if (event.keyCode === 0xd) {
    _0x5396c9.preventDefault();
    register();
  }
});
const login = () => {
  const _0x2c6454 = document.querySelector("#login-email").value;
  const _0x3d9150 = document.querySelector("#login-password").value;
  if (_0x2c6454.trim() == '') {
    Alert.render("❌ Enter E-mail.");
  } else if (_0x3d9150.trim() == '') {
    Alert.render("❌ Enter Password.");
  } else {
    event.preventDefault();
    if (document.getElementById('cpatchaTextBoxSignIn').value == code_signin) {
      authenticate(_0x2c6454, _0x3d9150);
    } else {
      Alert.render("❌ Invalid Captcha. try Again");
      document.getElementById("cpatchaTextBoxSignIn").value = '';
      createCaptchaSignIn();
    }
  }
};
document.querySelector("#login").addEventListener('click', () => {
  login();
});
document.querySelector("#login-password").addEventListener("keyup", _0x592aba => {
  if (event.keyCode === 0xd) {
    _0x592aba.preventDefault();
    login();
  }
});
const authenticate = (_0x1261e3, _0x32c2b0) => {
  const _0x37c96e = firebase.auth();
  _0x37c96e.signInWithEmailAndPassword(_0x1261e3, _0x32c2b0);
  firebase.auth().signInWithEmailAndPassword(_0x1261e3, _0x32c2b0)['catch'](function (_0x2d5a16) {
    var _0x59040d = _0x2d5a16.message;
    Alert.render("❌ " + _0x59040d);
  });
};
const showHomepage = () => {
  document.querySelector("#registration-page").classList.add("hide");
  document.querySelector("#login-page").classList.add("hide");
  document.querySelector('#homepage').classList.remove('hide');
  document.querySelector("#myLogin").style.display = 'none';
};
const signOut = () => {
  firebase.auth().signOut().then(function () {
    location.href = "https://baraya-net.github.io/";
  })["catch"](function (_0x3f212e) {
    Alert.render("❌ error signing out, check network connection");
  });
};
auth.onAuthStateChanged(_0x1e50c9 => {
  if (_0x1e50c9) {
    showHomepage();
  }
});
document.querySelector("#forgot-password").addEventListener("click", () => {
  const _0x2a572f = document.querySelector("#login-email").value;
  if (_0x2a572f.trim() == '') {
    Alert.render("❌ Enter Your E-mail.");
  } else {
    forgotPassword(_0x2a572f);
  }
});
const forgotPassword = _0x502ea6 => {
  auth.sendPasswordResetEmail(_0x502ea6).then(function () {
    Alert.render("✔️ Send to your e-mail successfully! if you don't see it, please check your mail inbox in spam folder.");
  })["catch"](function (_0x555b7b) {
    Alert.render("❌ invalid e-mail or bad network connection.");
  });
};
document.querySelector("#change-pass-button").addEventListener("click", () => {
  CangePassword();
});
const CangePassword = () => {
  const _0x31bf2e = firebase.auth().currentUser;
  const _0x534d9d = document.querySelector('#new-password').value;
  const _0x22b65a = document.querySelector("#re-new-password").value;
  if (_0x534d9d.trim() == '') {
    Alert.render("❌ Enter New Password");
  } else {
    if (_0x534d9d.trim().length < 0x6) {
      Alert.render("❌ Password must be at least 6 characters.");
    } else if (_0x534d9d != _0x22b65a) {
      Alert.render("❌ New Password do not match.");
    } else {
      _0x31bf2e.updatePassword(_0x534d9d).then(function () {
        document.querySelector("#myChangePassword").style.display = "none";
        Alert.render("✔️ Update New Password successfully! Relogin please wait..");
        setTimeout(signOut, 0x2710);
      })["catch"](_0x17f86e => {
        var _0x3ac6ac = _0x17f86e.message;
        Alert.render("❌ " + _0x3ac6ac);
      });
    }
  }
};
const CangeProfile = () => {
  const _0x457087 = firebase.auth().currentUser;
  const _0xfdb5d3 = document.querySelector("#profile-name").value;
  const _0x11fc17 = document.querySelector('#profile-url').value;
  _0x457087.updateProfile({
    'displayName': _0xfdb5d3,
    'photoURL': _0x11fc17
  }).then(function () {
    document.querySelector("#myChangeProfile").style.display = "none";
    Alert.render("✔️ Update Profile successfully! reload page, please wait..");
    setTimeout(() => {
      document.location.reload();
    }, 0x1388);
  })["catch"](_0x212311 => {
    var _0x19182a = _0x212311.message;
    Alert.render("❌ " + _0x19182a);
  });
};
const DeleteMember = () => {
  Confirm.render2("❓ Are you sure for delete this member account?");
};
function CustomAlert() {
  this.render = function (_0x1eb474) {
    var _0x4401b3 = window.innerWidth;
    var _0x497216 = window.innerHeight;
    var _0x3edae1 = document.querySelector("#dialogoverlay");
    var _0x4134e1 = document.querySelector("#dialogbox");
    _0x3edae1.style.display = "block";
    _0x3edae1.style.height = _0x497216 + 'px';
    _0x4134e1.style.left = _0x4401b3 / 0x2 - 200 + 'px';
    _0x4134e1.style.top = "100px";
    _0x4134e1.style.display = "block";
    document.querySelector("#dialogboxhead").innerHTML = '<i>Information!</i>';
    document.querySelector('#dialogboxbody').innerHTML = _0x1eb474;
    document.querySelector("#dialogboxfoot").innerHTML = "<button style=\"width:100px\" onclick=\"Alert.ok()\">OK</button>";
  };
  this.ok = function () {
    document.querySelector('#dialogbox').style.display = 'none';
    document.querySelector("#dialogoverlay").style.display = "none";
  };
}
var Alert = new CustomAlert();
function CustomConfirm() {
  this.render2 = function (_0x3c35fe) {
    var _0x189d0d = window.innerWidth;
    var _0x2cc2cc = window.innerHeight;
    var _0x5ae6f3 = document.querySelector("#dialogoverlay");
    var _0x2e13a6 = document.querySelector("#dialogbox");
    _0x5ae6f3.style.display = "block";
    _0x5ae6f3.style.height = _0x2cc2cc + 'px';
    _0x2e13a6.style.left = _0x189d0d / 0x2 - 200 + 'px';
    _0x2e13a6.style.top = "100px";
    _0x2e13a6.style.display = 'block';
    document.querySelector('#dialogboxhead').innerHTML = '<i>Confirmation!</i>';
    document.querySelector('#dialogboxbody').innerHTML = _0x3c35fe;
    document.querySelector("#dialogboxfoot").innerHTML = "<button style=\"width:100px\" onclick=\"Confirm.ok()\">OK</button><button style=\"width:100px\" onclick=\"Confirm.cancel()\">Cancel</button>";
  };
  this.ok = function () {
    document.querySelector('#dialogbox').style.display = "none";
    document.querySelector("#dialogoverlay").style.display = "none";
    const _0x2a4abb = firebase.auth().currentUser;
    _0x2a4abb["delete"]().then(() => {
      Alert.render("✔️ Delete Member Accound successfully! Relogin Please Wait..");
      setTimeout(signOut, 0x2710);
    })['catch'](_0x3b6d41 => {
      var _0x424c87 = _0x3b6d41.message;
      Alert.render("❌ " + _0x424c87);
    });
    ;
  };
  this.cancel = function () {
    document.querySelector("#dialogbox").style.display = "none";
    document.querySelector("#dialogoverlay").style.display = 'none';
    return false;
  };
}
var Confirm = new CustomConfirm();
