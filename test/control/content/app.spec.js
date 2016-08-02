describe('Unit: youCanBookMePluginContent content app', function () {
  describe('Unit: app', function () {
    beforeEach(module('youCanBookMePluginContent'));
    var location, route, rootScope;
    beforeEach(inject(function () {

    }));
    var ContentHome, scope, $rootScope, $controller, Buildfire, ActionItems, TAG_NAMES, STATUS_CODE, LAYOUTS, STATUS_MESSAGES, CONTENT_TYPE, q, Utils;

    beforeEach(inject(function (_Utils_, _$rootScope_, _$q_, _$controller_, _TAG_NAMES_, _STATUS_CODE_, _STATUS_MESSAGES_) {
      $rootScope = _$rootScope_;
      q = _$q_;
      scope = $rootScope.$new();
      $controller = _$controller_;
      TAG_NAMES = _TAG_NAMES_;
      STATUS_CODE = _STATUS_CODE_;
      STATUS_MESSAGES = _STATUS_MESSAGES_;
      Utils = _Utils_;
      Buildfire = {
        components: {
          carousel: {
            editor: function (name) {
              return {}
            },
            viewer: function (name) {
              return {}
            }
          }

        },     spinner: {
          hide: function () {
            return {}
          },
          show: function () {
            return {}
          }

        }
      };
        ActionItems = jasmine.createSpyObj('ActionItems', ['showDialog'])

    }));

    beforeEach(function () {
      ContentHome = $controller('ContentHomeCtrl', {
        $scope: scope,
        $q: q,
        Buildfire: Buildfire,
        TAG_NAMES: TAG_NAMES,
        ActionItems: ActionItems,
        STATUS_CODE: STATUS_CODE,
        CONTENT_TYPE: CONTENT_TYPE,
        LAYOUTS: LAYOUTS,
        Utils:Utils
      });
    });
    describe('It will test the defined methods', function () {

      it('it should pass if ContentHome is defined', function () {
        expect(ContentHome).not.toBeUndefined();
      });

      it('it should pass if ContentHome.validateUrl is called with success', function () {
        ContentHome.subDomain = 'KMT';
        ContentHome.custom = 'http://kmt.youcanbook.me';
        Utils.validateUrl(ContentHome.custom);
        ContentHome.validateUrl();
        var result  = true;
      });

      it('it should pass if ContentHome.validateUrl is called with error', function () {

        ContentHome.validateUrl();
      });

      it('it should pass if ContentHome.gotToPage is called', function () {

        ContentHome.gotToPage();
      });

      it('it should pass if  ContentHome.success is called', function () {
          var result = {};
        ContentHome.saveData(result, TAG_NAMES.SCHEDULING_INFO);
        ContentHome.success(result);
      });

      it('it should pass if  ContentHome.error is called', function () {
        var result = {};
        ContentHome.saveData(result, TAG_NAMES.SCHEDULING_INFO);
        ContentHome.error(result);
      });

      it('it should pass if  ContentHome.addSubDomain is called', function () {
        ContentHome.addSubDomain();
      });

      it('it should pass if  ContentHome.addSubDomain is called and it has ContentHome.subDomain', function () {
        ContentHome.subDomain = 'KMT';
        ContentHome.addSubDomain();
      });

      it('it should pass if  ContentHome.clearUrl is called and it has ContentHome.custom is null', function () {
        ContentHome.custom = null;
        ContentHome.clearUrl();
      });

      it('it should pass if ContentHome.init is called for error', function () {
        ContentHome.init();
        ContentHome.error()
      });

      it('it should pass if ContentHome.init is called for success', function () {
        var result = {data: {content: {}}};
        ContentHome.init();
        ContentHome.success(result);
      });

    });
  });
});