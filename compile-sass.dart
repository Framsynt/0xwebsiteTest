import 'dart:io';
import 'package:sass/sass.dart' as sass;

// usage
// dart compile-sass.dart src/scss/styles.scss assets/css/styles.css

void main(List<String> arguments) {
  var result = sass.compile(arguments[0]);
  new File(arguments[1]).writeAsStringSync(result);
}
