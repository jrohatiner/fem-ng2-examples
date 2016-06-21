### Change Detection
There are six types of change detection:

* CheckOnce: after calling `detectChanges` the mode of the change detector will become Checked

* Checked: the change detector should be skipped until its mode changes to `CheckOnce`

* CheckAlways: after calling `detectChanges` the mode of the change detector will remain `CheckAlways`

* Detached: the change detector sub tree is not a part of the main tree and should be skipped

* OnPush: the change detector's mode will be set to `CheckOnce` during hydration.

* Default: the change detector's mode will be set to `CheckAlways` during hydration.

The two most important strategies are `Default` and `OnPush`. `Default` will check every component every round of change detection. If a component only depends on its inputs and we use immutable objects as the inputs, we can set the strategy to `OnPush`. All this does is disable change detection on a component until one or more of its inputs change, then it performs change detection on that subtree and subsequently disables it again.
