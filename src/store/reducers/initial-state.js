export default {
  auth: {
    appLoaded: false,
    redirectTo: null
  },
  instance: [],
  user: {
    firstName: '',
    balance: 0
  },
  campaign: {
    invitation: { name: '' },
    question: { answers: [], control_type: '' },
    progress: { answered: 0, questions: 1 }
  },
  customStyles: {
    root: {},
    header: {
      css: {
        surveyTitle: {}
      },
      data: {
        message: ''
      }
    },
    mainView: {},
    surveyBox: {
      surveyBoxHeader: {},
      surveyBoxProgressBar: {},
      surveyBoxFooter: {},
      surveyControl: {
        selectRadio: {},
        selectClickBar: {}
      }
    },
    footer: {
      css: {},
      links: []
    }
  }
};
