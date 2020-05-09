React Ribbon Component

<MainRibbon />

With Sub Components

<RibbonTabPage />
<RibbonGroup />
<RibbonColumn />
<RibbonRow />
<Separator />
<DropDownWithLargeImageWithText />
<ComboBox />
<ButtonWithLargeImageWithText />
<SplitButton />
<PopupMenu />
<MenuItem />
<MenuDropDown />
<MenuSeparator />
<ButtonWithSmallImage />
<DropDownWithSmallImage />
<SplitButtonWithSmallImage />
<ButtonWithSmallImageWithText />
<DropDownWithSmallImageWithText />
<Checkbox />

MainRibbon properties
- property "palette" for theming, example: 
{
    {
        main: '#2a569a',
        tabBody: '#efefef',
        inActiveTab: 'white',
        backStageButton: 'yellow',
        activeBackStageButton: 'blue',
        backStageText: 'brown',
    }
}

- property currentTab int
- font
- quickAccessButtons
- tabEvents
- fileButtonEvents
* children of type RibbonTabPage

RibbonTabPage properties
- text (title)
* children of type RibbonGroup, Separator

RibbonGroup properties
- text (title)
* children of type SplitButton, RibbonColumn, RibbonRow, DropDownWithLargeImageWithText, Separator

Group controls: (todo)
- check styleguide example for example