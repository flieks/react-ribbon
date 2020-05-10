React Ribbon Component

Demo: [Live styleguide](https://flieks.github.io/react-ribbon/)

![](images/RibbonExample.jpg)

```
 <MainRibbon
     text="Ribbon Title"
     currentTab={activeTab}
     tabEvents={{ onClick: (i) => { setActiveTab(i) } }}
     quickAccessButtons={[
            <ButtonWithSmallImage image={save} key="quickaccess1" />
     ]}
     >
      <RibbonTabPage text="HOME">
          <RibbonGroup text="Glossary">
               // ...children (check styleguide example)
          </RibbonGroup>
       </RibbonTabPage>
 </MainRibbon>
```

```
<MainRibbon />
```

With Sub Components

```
<RibbonTabPage />
<RibbonGroup />
<RibbonColumn />
<RibbonRow />
<Separator />
<DropDownWithSmallImageWithText />
<DropDownWithLargeImageWithText />
<ButtonWithSmallImageWithText />
<ButtonWithLargeImageWithText />
<ButtonWithSmallImage />
<SplitButton />
<SplitButtonWithSmallImage />
<PopupMenu />
<MenuItem />
<ComboBox />
<MenuDropDown />
<MenuSeparator />
<DropDownWithSmallImage />
<Checkbox />
```

MainRibbon properties
- text (title)
- property "palette" for theming, example: 
```
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
```
- currentTab - int
- font - string (ex `normal 11px 'Open Sans'`)
- quickAccessButtons - object ex
```
[
  <ButtonWithSmallImage
       image={save} key="quickaccess1" />,
  <DropDownWithSmallImage
       image={undo} key="quickaccess2" />,
  <DropDownWithSmallImage
       image={redo} key="quickaccess3" />
]
```
- tabEvents - (onClick to get new tab index)
- fileButtonEvents
* children of type RibbonTabPage

RibbonTabPage properties
- text (title)
* children of type RibbonGroup, Separator

RibbonGroup properties
- text (title)
* children of type SplitButton, RibbonColumn, RibbonRow, DropDownWithLargeImageWithText, Separator, CheckBox, DropDown, ButtonWithSmallImageWithText, ButtonWithLargeImageWithText, PopupMenu, MenuItem, MenuToggleItem, MenuSeparator, MenuDropDown

RibbonGroup Children: (to document!)

All components have an onClick and an enabled prop

Check [Live styleguide](https://flieks.github.io/react-ribbon/)