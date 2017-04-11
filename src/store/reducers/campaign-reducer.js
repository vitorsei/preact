import * as types from '../actions/action-types';
import initialState from './initial-state';
import { CampaignAction } from '../actions/campaign-actions';

export default function (state = initialState.campaign, action){
  switch (action.type) {
    case types.SUBMIT_ANSWER_SUCCESS:
      return action.campaign;
    case types.CAMPAIGN_LOADED_SUCCESS:
      return action.campaign;
    default:
      return state;
  }
}
