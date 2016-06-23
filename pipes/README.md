### Using Pipes
We can use a pipe anywhere that a template expression is allowed. To activate a pipe, append a pipe character to the expression, followed by whichever pipe you want to use. There are 12 different build-in pipes:

1. **AsyncPipe** - subscribes to an Observable or Promise and returns the latest value it has emitted
2. **CurrencyPipe** - formats a number as local currency
3. **DatePipe** - formats a date value to a string based on the requested format
4. **DecimalPipe** - formats a number as local text. i.e. group sizing and separator and other locale-specific configurations are based on the active locale
5. **I18nPluralPipe** - maps a value to a string that pluralizes the value properly
6. **I18nSelectPipe** - generic selector that displays the string that matches the current value
7. **JsonPipe** - transforms any input value using JSON.stringify
8. **LowerCasePipe** - transforms text to lowercase
9. **PercentPipe** - formats a number as local percent
10. **ReplacePipe** - creates a new String with some or all of the matches of a pattern replaced by a replacement
11. **SlicePipe** - creates a new List or String containing only a subset (slice) of the elements
12. **UpperCasePipe** - transforms text to lowercase
