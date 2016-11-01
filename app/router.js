import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('results', {path: '/results/:zip'});
  this.route('committee', {path: '/committee/:page'});
  this.route('subcommittee', {path: '/subcommittee/:committee_id'});
});

export default Router;