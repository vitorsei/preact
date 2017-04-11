import * as Superagent from 'superagent';
import superAgentPromise from 'superagent-promise';
import * as cookie from 'react-cookie';
const superagent = superAgentPromise(Superagent, Promise);
import apiConfig from './api-config';

const API_ROOT = apiConfig.anonymousAhApiUrl;

const responseBody = (res) => res.body.data;

let token;

function setToken(_token) {
  token = _token;
}

function clearToken() {
  token = null;
}

const tokenPlugin = (req) => {
  token = cookie.load('pp-token');
  if (token) {
    req.set('pp-token', token);
  }
};

const requests = {
  getRaw: (url) =>
    superagent.get(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
  get: (url) => {
    const instanceCode = cookie.load('pp-instance-code');
    return superagent.get(`${API_ROOT}/${instanceCode}${url}`).use(tokenPlugin).then(responseBody);
  },
  post: (url) => {
    const instanceCode = cookie.load('pp-instance-code');
    return superagent.post(`${API_ROOT}/${instanceCode}${url}`, body).use(tokenPlugin).then(responseBody);
  }
};

function getInstances() {
  return requests.getRaw('/public/server/list');
}

function getCampaigns() {
  return requests.get('/pp-au/campaigns/paged/?page=1&pageSize=5&filter=all&mode=list');
}

function getCampaign(id) {
  return requests.get(`/campaigns/${id}`);
}

function resumeCampaign(campaignId) {
  return requests.get(`/campaigns/${campaignId}/go/`);
}

function getBalance() {
  return requests.get('/user/balance');
}

function submitAnswer(campaignId, questionId, answerId, answers) {
  return requests.post(`/campaigns/${campaignId}/question/${questionId}/`, {
    value: { [answerId]: true },
    displayed: answers
  });
}

function getCustomStyles() {
  // const customStylesNewsConnect = {
  //   root: {
  //     mainRoot: {
  //       color: '#333333',
  //       fontFamily: '"Helvetica Nue", "Helvetica", "Arial", "sans-serif"',
  //       fontStyle: 'normal',
  //       fontWeight: '400'
  //     }
  //   },
  //   header: {
  //     headerRoot: {
  //       backgroundColor: '#2B3446',
  //       color: '#FFFFFF'
  //     },
  //     surveyTitle: {
  //       fontSize: '1.8rem'
  //     }
  //   },
  //   mainView: {
  //     mainViewRoot: {
  //       backgroundImage: 'url()'
  //     }
  //   },
  //   surveyBox: {
  //     surveyBoxRoot: {
  //     },
  //     header: {
  //       backgroundColor: '#FFFFFF',
  //       color: '#000000'
  //     },
  //     progressBarComplete: {
  //       backgroundColor: '#00A9EA'
  //     },
  //     progressBarIncomplete: {
  //       backgroundColor: '#E6E6E8'
  //     },
  //     footer: {
  //       backgroundColor: '#FFFFFF'
  //     },
  //     button: {
  //       'background': '#FFFFFF',
  //       'border': '1px solid #00A9EA',
  //       'color': '#00A9EA',
  //       ':active': {
  //         background: '#00A9EA',
  //         boxShadow: 'none'
  //       }
  //     },
  //     buttonActive: {
  //       background: '#00A9EA',
  //       boxShadow: '0 2px 0 0 #006D97',
  //       color: "#FFFFFF"
  //     },
  //     buttonInactive: {
  //       background: '#FFFFFF',
  //       boxShadow: 'none',
  //       color: "#00A9EA"
  //     },
  //     selectClickBarListRowDefault: {
  //       'background': '#F2F2F2',
  //       ':active': {
  //         background: '#00A9EA',
  //         color: '#FFFFFF'
  //       }
  //     },
  //     selectClickBarListRowActive: {
  //       background: '#00A9EA',
  //       color: '#FFFFFF'
  //     }
  //   },
  //   footer: {
  //     css: {
  //       link: {
  //         ':hover': {
  //         }
  //       }
  //     },
  //     links: [
  //       { url: '', label: '', text: 'Privacy Policy' },
  //       { url: '', label: '', text: 'Connect Terms of Use' },
  //       { url: '', label: '', text: 'FAQ' },
  //       { url: '', label: '', text: 'Contact Us' }
  //     ]
  //   }
  // };
  const customStyles = {
    root: {
      mainRoot: {
        color: '#333333',
        fontFamily: '"Open Sans", "Tahoma", "Geneva", "sans-serif"',
        fontStyle: 'normal',
        fontWeight: '400'
      }
    },
    header: {
      css: {
        headerRoot: {
          backgroundColor: '#475369',
          color: '#FFFFFF'
        },
        surveyTitle: {
          fontSize: '1.8rem'
        }
      },
      data: {
        message: 'Points',
        currency: '$'
      }
    },
    mainView: {
      mainViewRoot: {
        backgroundImage: 'url("/assets/images/bg-survey.jpeg")'
      }
    },
    surveyBox: {
      surveyBoxRoot: {},
      surveyBoxHeader: {
        header: {
          backgroundColor: '#475369',
          color: '#FFFFFF'
        },
        headerSmartphones: {
          backgroundColor: '#2B3446'
        }
      },
      surveyBoxProgressBar: {
        progressBarComplete: {
          backgroundColor: '#20D6C9'
        },
        progressBarIncomplete: {
          backgroundColor: '#39475C'
        }
      },
      surveyBoxFooter: {
        footer: {
          backgroundColor: '#475369'
        },
        button: {
          'background': '#3A5ECA',
          'color': '#FFFFFF',
          ':active': {
            background: '#4169E1',
            boxShadow: 'none'
          }
        },
        buttonActive: {
          background: '#4169E1',
          boxShadow: '0 2px 0 0 #002896'
        },
        buttonInactive: {
          background: '#3A5ECA',
          boxShadow: '0 2px 0 0 #002896'
        }
      },
      surveyControl: {
        selectRadio: {
          selectRadioListRowDefault: {
            backgroundImage: 'url("/assets/images/radio-16.png")',
            backgroundPosition: '0 0'
          },
          selectRadioListRowActive: {
            backgroundImage: 'url("/assets/images/radio-16.png")',
            backgroundPosition: '0 16px'
          }
        },
        selectClickBar: {
          selectClickBarListRowDefault: {
            'background': 'linear-gradient(180deg, #ffffff 50%, #fafafa 50%)',
            ':active': {
              background: '#20D6C9',
              color: '#FFFFFF'
            }
          },
          selectClickBarListRowActive: {
            background: '#20D6C9',
            color: '#FFFFFF'
          }
        }
      }
    },
    footer: {
      css: {
        link: {
          'color': '#337ab7',
          ':hover': {
            textDecoration: 'underline'
          }
        }
      },
      links: [
        { url: '', label: 'Please see our', text: 'terms of service' }
      ]
    }
  };
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Object.assign([], customStyles));
    }, 1);
  });
}

export default {
  getInstances,
  getCampaigns,
  getCampaign,
  resumeCampaign,
  submitAnswer,
  getBalance,
  getCustomStyles,
  setToken,
  clearToken
};
