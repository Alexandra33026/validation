System.register(["aurelia-validation"], function (_export) {
  var Validation, _createClass, _classCallCheck, Person;

  return {
    setters: [function (_aureliaValidation) {
      Validation = _aureliaValidation.Validation;
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      Person = _export("Person", (function () {
        function Person(validation) {
          _classCallCheck(this, Person);

          this.firstName = "John";
          this.validation = validation.on(this).ensure("firstName").notEmpty().betweenLength(5, 10);
        }

        _createClass(Person, {
          welcome: {
            value: function welcome() {
              var _this = this;

              this.validation.validate().then(function () {
                alert("Welcome " + _this.firstName);
              });
            }
          }
        }, {
          inject: {
            value: function inject() {
              return [Validation];
            }
          }
        });

        return Person;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGVzL2Zvcm0tc3VibWlzc2lvbi92YWxpZGF0ZS92aWV3LW1vZGVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7TUFBUSxVQUFVLGlDQUNMLE1BQU07Ozs7QUFEWCxnQkFBVSxzQkFBVixVQUFVOzs7Ozs7Ozs7QUFDTCxZQUFNO0FBRU4saUJBRkEsTUFBTSxDQUVMLFVBQVUsRUFBRTtnQ0FGYixNQUFNOztBQUdmLGNBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO0FBQ3hCLGNBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FDbEMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUNqQixRQUFRLEVBQUUsQ0FDVixhQUFhLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQzFCOztxQkFSVSxNQUFNO0FBU2pCLGlCQUFPO21CQUFBLG1CQUFFOzs7QUFDUCxrQkFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQzdCLFlBQU07QUFDSixxQkFBSyxjQUFZLE1BQUssU0FBUyxDQUFHLENBQUM7ZUFDcEMsQ0FDRixDQUFDO2FBQ0g7OztBQWRNLGdCQUFNO21CQUFBLGtCQUFHO0FBQUUscUJBQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUFDOzs7O2VBRDVCLE1BQU0iLCJmaWxlIjoiZXhhbXBsZXMvZm9ybS1zdWJtaXNzaW9uL3ZhbGlkYXRlL3ZpZXctbW9kZWwuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==