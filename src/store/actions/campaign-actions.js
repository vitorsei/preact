import * as types from './action-types';
import AhApi from '../api/ah-api';

export function loadCampaignsSuccess(campaigns) {
  return { type: types.CAMPAIGNS_LOADED_SUCESS, campaigns };
}

export function loadCampaignSuccess(campaign){
  return { type: types.CAMPAIGN_LOADED_SUCCESS, campaign };
}

export function loadCampaign(campaignId) {
  return async function (dispatch) {
    const question = await AhApi.resumeCampaign(campaignId);
    const campaignInfo = await AhApi.getCampaign(campaignId);
    const res = { ...question, ...campaignInfo };
    dispatch(loadCampaignSuccess(res));
  };
}

export function submitAnswer(campaignId, questionId, answerId, answers) {
  return async function (dispatch) {
    const question = await AhApi.submitAnswer(campaignId, questionId, answerId, answers);
    const campaignInfo = await AhApi.getCampaign(campaignId);
    const res = { ...question, ...campaignInfo };
    dispatch(submitAnswerSuccess(res));
  };
}

export function submitAnswerSuccess(campaign) {
  return { type: types.SUBMIT_ANSWER_SUCCESS, campaign };
}
