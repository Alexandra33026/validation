System.register(['aurelia-validation'], function (_export) {
  var Validation, _classCallCheck, _createClass, Person;

  return {
    setters: [function (_aureliaValidation) {
      Validation = _aureliaValidation.Validation;
    }],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      Person = (function () {
        function Person(validation) {
          _classCallCheck(this, Person);

          this.alphaNumericOrWhitespaceProperty = 'abc 123';

          this.validation = validation.on(this).ensure('alphaNumericOrWhitespaceProperty').containsOnlyAlphanumericsOrWhitespace();
        }

        _createClass(Person, null, [{
          key: 'inject',
          value: function inject() {
            return [Validation];
          }
        }]);

        return Person;
      })();

      _export('Person', Person);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGVzL3ZhbGlkYXRvcnMvY29udGFpbnNPbmx5QWxwaGFudW1lcmljc09yV2hpdGVzcGFjZS92aWV3LW1vZGVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7aURBQ2EsTUFBTTs7OztzQ0FEWCxVQUFVOzs7Ozs7Ozs7QUFDTCxZQUFNO0FBRU4saUJBRkEsTUFBTSxDQUVMLFVBQVUsRUFBRTtnQ0FGYixNQUFNOztBQUdmLGNBQUksQ0FBQyxnQ0FBZ0MsR0FBRyxTQUFTLENBQUM7O0FBRWxELGNBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FDbEMsTUFBTSxDQUFDLGtDQUFrQyxDQUFDLENBQUMscUNBQXFDLEVBQUUsQ0FBQztTQUN2Rjs7cUJBUFUsTUFBTTs7aUJBQ0osa0JBQUc7QUFBRSxtQkFBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1dBQUM7OztlQUQ1QixNQUFNOzs7d0JBQU4sTUFBTSIsImZpbGUiOiJleGFtcGxlcy92YWxpZGF0b3JzL2NvbnRhaW5zT25seUFscGhhbnVtZXJpY3NPcldoaXRlc3BhY2Uvdmlldy1tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9