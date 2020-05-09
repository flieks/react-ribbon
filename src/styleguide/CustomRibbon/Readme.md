Example Ribbon:

```js
    import React, { useState, useEffect } from 'react';

import MainRibbon from '../../MainRibbon'
import RibbonTabPage from '../../RibbonTabPage'
import RibbonGroup from '../../RibbonGroup'
import RibbonColumn from '../../Column'
import RibbonRow from '../../Row'
import Separator from '../../Separator'
import DropDownWithLargeImageWithText from '../../LargeImageWithText/DropDown'
import ComboBox from '../../ComboBox'
import ButtonWithLargeImageWithText from '../../LargeImageWithText/Button'
import SplitButton from '../../LargeImageWithText/SplitButton'
import PopupMenu from '../../PopupMenu/PopupMenu'
import MenuItem from '../../PopupMenu/MenuItem'
import MenuDropDown from '../../PopupMenu/MenuDropDown'
import MenuSeparator from '../../PopupMenu/MenuSeparator'
import ButtonWithSmallImage from '../../SmallImage/Button'
import DropDownWithSmallImage from '../../SmallImage/DropDown'
import SplitButtonWithSmallImage from '../../SmallImage/SplitButton'
import ButtonWithSmallImageWithText from '../../SmallImageWithText/Button'
import DropDownWithSmallImageWithText from '../../SmallImageWithText/DropDown'
import Checkbox from '../../Checkbox'
import BackStageView from '../../BackStage/View'
import BackStagePage from '../../BackStage/Page'
// import deepEqual from 'deep-equal'

import save from './icons/homeTab/ic_light_save.png'
import undo from './icons/homeTab/ic_undo.png'
import redo from './icons/homeTab/ic_redo.png'
import cut from './icons/homeTab/ic_cut.png'
import copy from './icons/homeTab/ic_copy.png'

import paste from './icons/homeTab/ic_paste.png'
import bold from './icons/homeTab/ic_font_bold.png'
import italic from './icons/homeTab/ic_font_italic.png'
import emphasis from './icons/homeTab/ic_font_emphasis.png'
import fill from './icons/homeTab/ic_fill.png'
import font from './icons/homeTab/ic_font.png'
import border from './icons/homeTab/ic_border.png'
import minus from './icons/homeTab/ic_font_size_minus.png'
import plus from './icons/homeTab/ic_font_size_plus.png'
import increase from './icons/homeTab/ic_increase_indent.png'
import decrease from './icons/homeTab/ic_decrease_indent.png'
import top from './icons/homeTab/ic_align_text_top.png'
import middle from './icons/homeTab/ic_align_text_normal.png'
import bottom from './icons/homeTab/ic_align_text_bottom.png'
import left from './icons/homeTab/ic_align_text_left.png'
import center from './icons/homeTab/ic_align_text_center.png'
import right from './icons/homeTab/ic_align_text_right.png'
import marge from './icons/homeTab/ic_marge_center.png'
import wrap from './icons/homeTab/ic_wrap_text.png'
import orient from './icons/homeTab/ic_text_orientation.png'
import pasteSmall from './icons/homeTab/ic_paste_small.png'
import border1 from './icons/homeTab/ic_border_1.png'
import border2 from './icons/homeTab/ic_border_2.png'
import border3 from './icons/homeTab/ic_border_3.png'
import border4 from './icons/homeTab/ic_border_4.png'
import border5 from './icons/homeTab/ic_border_5.png'
import border6 from './icons/homeTab/ic_border_6.png'
import border7 from './icons/homeTab/ic_border_7.png'
import border8 from './icons/homeTab/ic_border_8.png'
import border9 from './icons/homeTab/ic_border_9.png'
import border10 from './icons/homeTab/ic_border_10.png'
import border11 from './icons/homeTab/ic_border_11.png'
import border12 from './icons/homeTab/ic_border_12.png'
import border13 from './icons/homeTab/ic_border_13.png'


// TAB HOME:
import pasteBranche from './icons/homeTab/branche_paste_16.png'
import pasteRows from './icons/homeTab/paste_rows_16.png'
import pasteSpecial from './icons/homeTab/paste_special_16x16.png'
import cutRows from './icons/homeTab/Cut_Rows.png'
import cutBranche from './icons/homeTab/Branch_cut_16.png'
import copyRows from './icons/homeTab/copy_rows1.png'
import copyBranche from './icons/homeTab/branch_copy_16.png'
import formatPainter from './icons/homeTab/ic_format.png'
import mergeCenter from './icons/homeTab/merge_and_center.png'
import mergeCells from './icons/homeTab/merge_cells.png'
import mergeAcross from './icons/homeTab/merge_across.png'
import unmergeCells from './icons/homeTab/unmerge_cells.png'
import replace from './icons/homeTab/ID_EDIT_REPLACE_SMALL.png'
import search from './icons/homeTab/ID_EDIT_FIND_BIG.png'
import bookmarks from './icons/homeTab/document_star.png'
import bookmarkList from './icons/homeTab/document_star(2).png'
import bookmarkAdd from './icons/homeTab/star_add2(2).png'
import tasks from './icons/homeTab/Branches_32.png'
import taskExpand from './icons/homeTab/Expand_task.png'
import taskCollapse from './icons/homeTab/Collapse_task.png'
import taskInsert from './icons/homeTab/creer_poste_16.png'
import taskInsertSub from './icons/homeTab/creer_sous_poste_16.png'
import taskDelete from './icons/homeTab/Folder_Delete_16.png'
import numbering from './icons/homeTab/branche_chiffrage_32.png'
import numberingEntire from './icons/homeTab/numbers_all_16.png'
import numberingRules from './icons/homeTab/nombre_regle_16.png'
import selection from './icons/homeTab/selection.png'
import selectionEdit from './icons/homeTab/edit_selection_16.png'
import selectionAdjust from './icons/homeTab/Adjust_Quantity_16.png'
import selectionAll from './icons/homeTab/Select_All_16.png'
import insert from './icons/homeTab/cell_insert_32x32.png'
import insertHyper from './icons/homeTab/hyperlink.png'
import insertRows from './icons/homeTab/inserer_ligne_haut_16.png'
import insertRowsAfter from './icons/homeTab/inserer_ligne_bas_16.png'
import insertPasteFirst from './icons/homeTab/Insert_line.png'
import insertColumns from './icons/homeTab/Add_Set_of_Fields_16.png'
import insertAddTask from './icons/homeTab/Add_Task_16.png'
import insertGroupGantt from './icons/homeTab/Add_group_16.png'
import deleteMain from './icons/homeTab/cell_delete_32x32.png'
import deleteHyper from './icons/homeTab/hyperlink_delete_16.png'
import deleteColumns from './icons/homeTab/delete_selected_column_16.png'
import deleteClearCells from './icons/homeTab/clear_cells_content_16.png'
import deleteTask1 from './icons/homeTab/supprimer_poste_16.png'
import deleteTask2 from './icons/homeTab/Delete_task_16.png'
import format from './icons/homeTab/cell_format_32x32.png'
import formatRowHeight from './icons/homeTab/row_height_16.png'
import formatRowHeightAuto from './icons/homeTab/row_height_Auto_16.png'
import formatColumnWidth from './icons/homeTab/colomn_with_16.png'
import formatColumnWidthAuto from './icons/homeTab/colomn_with_Auto_16.png'
import formatColumnDefaultWidth from './icons/homeTab/colomn_default_16.png'
import formatSheetRename from './icons/homeTab/feuille_rename_16.png'
import formatSheetMove from './icons/homeTab/feuille_move_16.png'
import formatLockCell from './icons/homeTab/locker_open_16.png'
import formatCells from './icons/homeTab/format_cells_16.png'
import compute from './icons/homeTab/recalculer_32.png'
import computeCostsOnly from './icons/homeTab/calculer_couts_16.png'
import computeRefresh1 from './icons/homeTab/Refresh_Red.png'
import computeRefresh2 from './icons/homeTab/Refresh_White.png'
import computeGlobalSeek from './icons/homeTab/feuille_cible_16.png'

const fontFamilies = ['Adobe Arabic', 'Adobe Caslon Pro', 'Adobe Caslon Pro Bold', 'Adobe Devanagari', 'Adobe Fan Heiti Std B', 'Adobe Fangsong Std R', 'Adobe Garamond Pro', 'Adobe Garamond Pro Bold', 'Adobe Gothic Std B', 'Adobe Hebrew', 'Adobe Heiti Std R', 'Adobe Kaiti Std R', 'Adobe Ming Std L', 'Adobe Myungjo Std M', 'Adobe Naskh Medium', 'Adobe Song Std L', 'Arial', 'Arial Black', 'Arial Narrow', 'Birch Std', 'Blackoak Std', 'Bodoni Bd BT', 'Bodoni Bk BT', 'Book Antiqua', 'Bookman Old Style', 'Bookshelf Symbol 7', 'Bradley Hand ITC', 'Brush Script Std', 'Calibri', 'Calibri Light', 'Cambria', 'Cambria Math', 'Candara', 'CentSchbkCyrill BT', 'Century', 'Century725 Cn BT', 'Century751 BT', 'Century751 No2 BT', 'Century751 SeBd BT', 'Chaparral Pro', 'Chaparral Pro Light', 'Charlemagne Std', 'Clarendon Blk BT', 'Clarendon BT', 'Clarendon Lt BT', 'Comic Sans MS', 'Consolas', 'Constantia', 'Cooper Std Black', 'Corbel', 'Courier New', 'DAGGERSQUARE', 'DeVinne Txt BT', 'DFGothic-EB', 'DFKaiSho-SB', 'DFMincho-SU', 'DFMincho-UB', 'DFMincho-W5', 'DFPOP1-W9', 'Ebrima', 'Embassy BT', 'EngraversGothic BT', 'Exotc350 Bd BT', 'Exotc350 DmBd BT', 'Franklin Gothic Medium', 'Freehand521 BT', 'Freestyle Script', 'French Script MT', 'Futura Bk BT', 'Futura Md BT', 'Gabriola', 'Gadugi', 'Garamond', 'Geometr212 BkCn BT', 'Geometr415 Blk BT', 'Geometr706 BlkCn BT', 'Georgia', 'GeoSlab703 Md BT', 'GeoSlab703 MdCn BT', 'Giddyup Std', 'Gil', 'GOST Common', 'Hobo Std', 'HoloLens MDL2 Assets', 'Humanst521 BT', 'Humanst521 Lt BT', 'Humnst777 Blk BT', 'Humnst777 BlkCn BT', 'Humnst777 BT', 'Humnst777 Cn BT', 'Humnst777 Lt BT', 'Impact', 'Javanese Text', 'Juice ITC', 'Kaufmann BT', 'Kozuka Gothic Pr6N B', 'Kozuka Gothic Pr6N EL', 'Kozuka Gothic Pr6N H', 'Kozuka Gothic Pr6N L', 'Kozuka Gothic Pr6N M', 'Kozuka Gothic Pr6N R', 'Kozuka Gothic Pro B', 'Kozuka Gothic Pro EL', 'Kozuka Gothic Pro H', 'Kozuka Gothic Pro L', 'Kozuka Gothic Pro M', 'Kozuka Gothic Pro R', 'Kozuka Mincho Pr6N B', 'Kozuka Mincho Pr6N EL', 'Kozuka Mincho Pr6N H', 'Kozuka Mincho Pr6N L', 'Kozuka Mincho Pr6N M', 'Kozuka Mincho Pr6N R', 'Kozuka Mincho Pro B', 'Kozuka Mincho Pro EL', 'Kozuka Mincho Pro H', 'Kozuka Mincho Pro L', 'Kozuka Mincho Pro M', 'Kozuka Mincho Pro R', 'Kristen ITC', 'Leelawadee UI', 'Leelawadee UI Semilight', 'Letter Gothic Std', 'Lithos Pro Regular', 'Lucida Console', 'Lucida Handwriting', 'Lucida Sans Unicode', 'Malgun Gothic', 'Malgun Gothic Semilight', 'Marlett', 'Mesquite Std', 'Microsoft Himalaya', 'Microsoft JhengHei', 'Microsoft JhengHei Light', 'Microsoft JhengHei UI', 'Microsoft JhengHei UI Light', 'Microsoft New Tai Lue', 'Microsoft PhagsPa', 'Microsoft Sans Serif', 'Microsoft Tai Le', 'Microsoft YaHei', 'Microsoft YaHei Light', 'Microsoft YaHei UI', 'Microsoft YaHei UI Light', 'Microsoft Yi Baiti', 'MingLiU-ExtB', 'MingLiU_HKSCS-ExtB', 'Minion Pro', 'Minion Pro Cond', 'Minion Pro Med', 'Minion Pro SmBd', 'Mistral', 'Mongolian Baiti', 'Monotype Corsiva', 'MS Gothic', 'MS Outlook', 'MS PGothic', 'MS Reference Sans Serif', 'MS Reference Specialty', 'MS UI Gothic', 'MV Boli', 'Myanmar Text', 'Myriad Arabic', 'Myriad Hebrew', 'Myriad Pro', 'Myriad Pro Cond', 'Myriad Pro Light', 'News701 BT', 'News706 BT', 'NewsGoth BT', 'NewsGoth Cn BT', 'NewsGoth Lt BT', 'Nirmala UI', 'Nirmala UI Semilight', 'NSimSun', 'Nueva Std', 'Nueva Std Cond', 'OCR A Std', 'OCR-A BT', 'OCR-B 10 BT', 'Orator Std', 'Palatino Linotype', 'Papyrus', 'Pierre Dingbats', 'PMingLiU-ExtB', 'Poplar Std', 'Prestige Elite Std', 'Pristina', 'Revit_HEB_DWG', 'Revit_HEB_Key', 'Revit_HEB_SHX', 'RomanD', 'Rosewood Std Regular', 'Schadow BT', 'Segoe MDL2 Assets', 'Segoe Print', 'Segoe Script', 'Segoe UI', 'Segoe UI Black', 'Segoe UI Emoji', 'Segoe UI Historic', 'Segoe UI Light', 'Segoe UI Semibold', 'Segoe UI Semilight', 'Segoe UI Symbol', 'SimSun', 'SimSun-ExtB', 'Sitka Banner', 'Sitka Display', 'Sitka Heading', 'Sitka Small', 'Sitka Subheading', 'Sitka Text', 'Square721 BT', 'Square721 Cn BT', 'Stencil Std', 'Swis721 Blk BT', 'Swis721 BlkCn BT', 'Swis721 BT', 'Swis721 Cn BT', 'Swis721 Hv BT', 'Swis721 Lt BT', 'Swis721 LtEx BT', 'Swis721 WGL4 BT', 'Sylfaen', 'Symbol', 'Tahoma', 'TeamViewer11', 'Tekton Pro', 'Tekton Pro Cond', 'Tekton Pro Ext', 'Tempus Sans ITC', 'Times New Roman', 'Trajan Pro', 'Trebuchet MS', 'TypoUpright BT', 'Verdana', 'Webdings', 'Wingdings', 'Wingdings 2', 'Wingdings 3', 'Yu Gothic', 'Yu Gothic Light', 'Yu Gothic Medium', 'Yu Gothic UI', 'Yu Gothic UI Light', 'Yu Gothic UI Semibold', 'Yu Gothic UI Semilight']
const fontSizes = [8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72]

    const [activeTab, setActiveTab] = useState(0)
    const [state, setState2] = useState({})

    const setState = (key, value) => {
        const oldValue = state[key]
        let currentState = { ...state }

        if (!value) {
            const newValue = !oldValue
            currentState[key] = newValue
        } else {
            currentState[key] = value
        }

        setState2({ ...currentState })
    }

    const property = () => { console.log("property") }
    const run = () => { console.log("onClick") }
    const blur = () => { console.log("onBlur") }
    const propertyLocal = () => { console.log("propertyLocal") }

<MainRibbon text={'Ribbon Title'}
        palette={
            {
                main: '#2a569a',
                tabBody: '#efefef',
                inActiveTab: 'white',
                backStageButton: 'yellow',
                activeBackStageButton: 'blue',
                backStageText: 'brown',
            }
        }
        currentTab={activeTab}
        font="normal 11px 'Open Sans'"
        quickAccessButtons={[
            <ButtonWithSmallImage
                image={save} key="quickaccess1" />,
            <DropDownWithSmallImage
                image={undo} key="quickaccess2" />,
            <DropDownWithSmallImage
                image={redo} key="quickaccess3" />]}
        tabEvents={{ onClick: (i) => { setActiveTab(i) } }}
        fileButtonEvents={{
            onClick: () => {
                console.log("click fileB")
            }
        }}
    >
        <RibbonTabPage text="HOME">
            <RibbonGroup text="Glossary">
                <SplitButton
                    text="Paste"
                    image={paste}
                    enabled={true}
                >
                    <PopupMenu>
                        <MenuItem image={pasteSmall} text={'Paste Cells'}
                            onClick={() => {
                                console.log('first item clicked')
                            }}
                            hotKey='Ctrl+V'
                            enabled={true} />
                        <MenuItem
                            onClick={() => {
                                console.log('second item clicked')
                            }}
                            image={pasteRows}
                            text={'Paste Rows'}
                            enabled={true} />
                        <MenuItem image={pasteSpecial} text={'Paste Special'} enabled={true} />
                        <MenuSeparator />
                        <MenuItem image={pasteBranche} text={'Paste test 1'} enabled={true} hotKey='Shift+F12' />
                        <MenuItem image={pasteBranche} text={'Paste test 2'} enabled={true} hotKey='Ctrl+Shift+F12' />
                    </PopupMenu>
                </SplitButton>

                <RibbonColumn>
                    <DropDownWithSmallImageWithText
                        image={cut}
                        text={'Cut'}
                        active={true}
                        enabled={false}>
                        <PopupMenu>
                            <MenuItem image={cut} text={'Cut Cells'} hotKey='Ctrl+X'
                                enabled={property('e', 'ButtonCutCells')} />
                            <MenuItem image={cutRows} text={'Cut Rows'}
                                enabled={property('e', 'ButtonCutRows')} />
                            <MenuSeparator />
                            <MenuItem image={cutBranche} text={'Cut Task or Branch'} hotKey='Shift+F10'
                                enabled={property('e', 'ButtonCutTaskOrBranch')} />
                        </PopupMenu>
                    </DropDownWithSmallImageWithText>
                    <DropDownWithSmallImageWithText
                        image={copy}
                        text={'Copy'}
                        active={false}>
                        <PopupMenu>
                            <MenuItem image={copy} text={'Copy Cells'} hotKey='Ctrl+C'
                                enabled={property('e', 'ButtonCopyCells')} />
                            <MenuItem image={copyRows} text={'Copy Rows'}
                                enabled={property('e', 'ButtonCopyRows')} />
                            <MenuSeparator />
                            <MenuItem image={copyBranche} text={'Copy Task or Branch'} hotKey='Shift+F11'
                                enabled={property('e', 'ButtonCopyTaskOrBranch')} />
                        </PopupMenu>
                    </DropDownWithSmallImageWithText>
                    <ButtonWithSmallImageWithText
                        text={'Format Painter'} enabled={property('e', 'ToggleButtonFormatPainter')}
                        image={formatPainter} />
                </RibbonColumn>

            </RibbonGroup>

            <Separator />

            <RibbonGroup text="Font">
                <RibbonColumn>
                    <RibbonRow>
                        <ComboBox
                            index={state["ComboBoxFont"] || 0}
                            data={fontFamilies}
                            width={135}
                            onSelectionIndexChanged={(index, item) => {
                                setState('ComboBoxFont', index)
                            }
                            }
                        // events={{ onClick: setState({fontNameActive: !state.fontNameActive}), onBlur: setState({fontNameActive: !state.fontNameActive}) }}
                        />
                        <ComboBox
                            index={state["ComboBoxFontSize"] || 0}
                            width={41}
                            data={fontSizes}
                            active={false}
                            onSelectionIndexChanged={(index, item) => {
                                setState('ComboBoxFontSize', index)
                            }
                        } />
                        <ButtonWithSmallImage image={plus} />
                        <ButtonWithSmallImage image={minus} />
                    </RibbonRow>
                    <RibbonRow>
                        <ButtonWithSmallImage
                            image={bold}
                            active={state.ToggleButtonBold}
                            enabled={true}
                            events={{ onClick: () => setState('ToggleButtonBold') }} />
                        <ButtonWithSmallImage
                            image={italic}
                            active={state.ToggleButtonItalic}
                            enabled={false}
                            events={{ onClick: () => setState('ToggleButtonItalic') }} />
                        <ButtonWithSmallImage
                            image={emphasis}
                            active={state.ToggleButtonInderline}
                            enabled={true}
                            events={{ onClick: () => setState('ToggleButtonInderline') }} />
                        <Separator />
                        <SplitButtonWithSmallImage
                            image={state.borderImage || border}
                            // active={true || state.borderActive}
                            enabled={property('e', 'DropDownBorders')}
                        // arrowEvents={{ onClick: setState("borderActive") }}
                        >
                            <PopupMenu>
                                <MenuSeparator text={'Borders'} />
                                <MenuItem image={border1} text={'Bottom Border'} onClick={() => setState("borderImage", border1)}
                                    enabled={property('e', 'ButtonBottomBorder')} />
                                <MenuItem image={border2} text={'Top Border'} onClick={() => setState("borderImage", border2)}
                                    enabled={property('e', 'ButtonTopBorder')} />
                                <MenuItem image={border3} text={'Left Border'} onClick={() => setState("borderImage", border3)}
                                    enabled={property('e', 'ButtonLeftBorder')} />
                                <MenuItem image={border4} text={'Right Border'} onClick={() => setState("borderImage", border4)}
                                    enabled={property('e', 'ButtonRightBorder')} />
                                <MenuSeparator />
                                <MenuItem image={border5} text={'No Border'} onClick={() => setState("borderImage", border5)}
                                    enabled={property('e', 'ButtonNoBorder')} />
                                <MenuItem image={border6} text={'All Border'} onClick={() => setState("borderImage", border6)}
                                    enabled={property('e', 'ButtonAllBorders')} />
                                <MenuItem image={border7} text={'Outside Border'} onClick={() => setState("borderImage", border7)}
                                    enabled={property('e', 'ButtonOutsideBorders')} />
                                <MenuItem image={border8} text={'Thick Box Border'} onClick={() => setState("borderImage", border8)}
                                    enabled={property('e', 'ButtonThickBox')} />
                            </PopupMenu>
                        </SplitButtonWithSmallImage>

                        <Separator />

                        <SplitButtonWithSmallImage
                            image={fill} color={propertyLocal('sc', 'DropDownPaintBackGround', 'backgroundColor', null, (v) => v === 'transparent' ? 'white' : v)}
                            // active={state.fillActive}
                            // events={{ onClick: run(this.fillApply) }}
                            enabled={property('e', 'DropDownPaintBackGround')}>
                            <PopupMenu>
                                <MenuItem image={fill} text={'Choose background-color'} events={{ onClick: run("chooseFillColor") }} />
                            </PopupMenu>
                        </SplitButtonWithSmallImage>
                        <input id="fillColorInput" type="color" style={{ display: 'none' }} onChange={() => { }}></input>

                        <SplitButtonWithSmallImage
                            image={font} color={propertyLocal('sc', 'DropDownFontColor', 'font', 'color')}
                            // active={state.fontActive}
                            enabled={property('e', 'DropDownFontColor')}
                            events={{ onClick: run("fontApply") }}
                            // arrowEvents={{ onClick: run("fontClick"), onBlur: blur('fontActive') }}
                            >
                            <PopupMenu>
                                <MenuItem image={font} text={'Choose font-color'} events={{ onClick: run("chooseFontColor") }} />
                            </PopupMenu>
                        </SplitButtonWithSmallImage>
                        <input id="fontColorInput" type="color" style={{ display: 'none' }} onChange={() => { }}></input>
                    </RibbonRow>
                </RibbonColumn>
            </RibbonGroup>

            <Separator />

            <RibbonGroup text="Alignment">
                <RibbonRow>
                    <RibbonColumn>
                        <RibbonRow>
                            <DropDownWithSmallImageWithText
                                image={state.image || mergeCenter}
                                text={state.text || "Merge & Center"}
                                enabled={property('e', 'DropDownCenterAndMerge')}
                                // events={{ onClick: run(mergeClick), onBlur: blur('mergeActive') }}
                                >
                                <PopupMenu>
                                    <MenuItem image={mergeCenter} text={'Merge & Center'}
                                        onClick={() => {
                                            setState("text", "Merge & Center")
                                            setState("image", mergeCenter)
                                        }
                                    }/>
                                    <MenuItem image={mergeAcross} text={'Merge Across'}
                                        onClick={() => {
                                            setState("text", "Merge Across")
                                            setState("image", mergeAcross)
                                        }
                                    }/>
                                    <MenuItem image={mergeCells} text={'Merge Cells'}
                                        onClick={() => {
                                            setState("text", "Merge Cells")
                                            setState("image", mergeCells)
                                        }
                                    }/>
                                    <MenuItem image={unmergeCells} text={'Unmerge Cells'}
                                        onClick={() => {
                                            setState("text", "Unmerge Cells")
                                            setState("image", unmergeCells)
                                        }
                                    }/>
                                </PopupMenu>
                            </DropDownWithSmallImageWithText>
                        </RibbonRow>
                        <RibbonRow>
                            <ButtonWithSmallImage
                                image={left}
                                active={state.ToggleButtonAlignLeft}
                                enabled={true}
                                events={{ onClick: () => setState('ToggleButtonAlignLeft') }} />
                            <ButtonWithSmallImage
                                image={center}
                                active={state.ToggleButtonAlignCenter}
                                enabled={true}
                                events={{ onClick: () =>setState('ToggleButtonAlignCenter') }} />
                            <ButtonWithSmallImage
                                image={right}
                                active={state.ToggleButtonAlignRight}
                                enabled={true}
                                events={{ onClick: () =>setState('ToggleButtonAlignRight') }} />
                        </RibbonRow>
                    </RibbonColumn>
                </RibbonRow>

            </RibbonGroup>

            <Separator />
          <RibbonGroup text="Edit">
            <DropDownWithLargeImageWithText text="Selection" image={selection}
            //  active={state.editSelectionActive}
            //   events={{onClick: run(editSelectionClick), onBlur: blur('editSelectionActive')}}
              >
              <PopupMenu>
                <MenuItem image={selectionEdit} text='Edit Selection...' hotKey='Ctrl+F4' />
                <MenuSeparator text='Select' />
                <MenuItem image={selectionAdjust} text='Adjust Quantities...' />
                <MenuItem image={selectionAll} text='Select all lines in task' />
                <MenuItem text='Inverse Selection' />
              </PopupMenu>
            </DropDownWithLargeImageWithText>
            <Separator />
            <SplitButton text="Insert" image={insert}
          //    active={state.editInsertActive}
            //   arrowEvents={{onClick: run(editInsertClick), onBlur: blur('editInsertActive')}}
              >
              <PopupMenu>
                <MenuItem image={insert} text='Insert Cells' />
                <MenuItem image={insertHyper} text='Insert Hyperlink' />
                <MenuItem image={insertRows} text='Insert Rows' hotKey='Ctrl+L' />
                <MenuItem image={insertRowsAfter} text='Insert Rows After' />
                <MenuItem image={insertPasteFirst} text='Past first row of task' hotKey='Ctrl+R' />
                <MenuItem image={insertColumns} text='Insert Columns' />
                <MenuSeparator text='Tasks & Branches' />
                <MenuItem image={taskInsert} text='Insert Task' hotKey='Ctrl+F3' />
                <MenuItem image={taskInsertSub} text='Insert sub-Task' hotKey='Ctrl+F4' />
              </PopupMenu>
            </SplitButton>
            <SplitButton text="Delete" image={deleteMain}
            //   active={state.editDeleteActive}
            //   arrowEvents={{onClick: run(editDeleteClick), onBlur: blur('editDeleteActive')}}
              >
              <PopupMenu>
                <MenuItem image={deleteMain} text='Delete Cells' />
                <MenuItem image={deleteHyper} text='Delete Hyperlink' />
                <MenuItem image={deleteColumns} text='Delete Columns' />
                <MenuSeparator text='Clear' />
                <MenuItem image={deleteClearCells} text='Clear Cells Content' hotKey='Del' />
                <MenuSeparator text='Tasks & Branches' />
                <MenuItem image={deleteTask1} text='Delete Task or Branch' hotKey='Shift+F6' />
              </PopupMenu>
            </SplitButton>
            <DropDownWithLargeImageWithText text="Format" image={format}
            //   active={state.editFormatActive}
            //   events={{onClick: run(editFormatClick), onBlur: blur('editFormatActive')}}
              >
              <PopupMenu>
                <MenuItem image={formatRowHeight} text='Row Height' />
                <MenuItem image={formatRowHeightAuto} text='AutoFit Row Height' />
                <MenuItem image={formatColumnWidth} text='Column Width' />
                <MenuItem image={formatColumnWidthAuto} text='AutoFit Column Width' />
                <MenuItem image={formatColumnDefaultWidth} text='Default Width' />
                <MenuSeparator text='Visibility' />
                <MenuDropDown text='Hide & Unhide'
                //   active={state.editFormatSubActive}
                //   events={{onClick: run(editFormatSubClick), onBlur: blur('editFormatSubActive')}}
                  >
                  <MenuItem text='Hide Rows' />
                  <MenuItem text='Hide Columns' />
                  <MenuItem text='Hide Sheet' />
                  <MenuSeparator />
                  <MenuItem text='Unhide Rows' />
                  <MenuItem text='Unhide Columns' />
                  <MenuItem text='Unhide Sheet...' />
                </MenuDropDown>
                <MenuSeparator text='Organize Sheets' />
                <MenuItem image={formatSheetRename} text='Rename Sheet' />
                <MenuItem image={formatSheetMove} text='Move Sheet' />
                <MenuSeparator text='Protection' />
                <MenuItem image={formatLockCell} text='Lock Cell' />
                <MenuSeparator />
                <MenuItem image={formatCells} text='Format Cells...' />
              </PopupMenu>
            </DropDownWithLargeImageWithText>
          </RibbonGroup>

            <Separator />

          <RibbonGroup text="Navigate">

            <SplitButton text="Search"
              active={state.navSearchActive} image={search}
            //   arrowEvents={{onClick: run(this.navSearchClick), onBlur: blur('navSearchActive')}}
              >
              <PopupMenu>
                <MenuItem image={search} text='Find...' hotKey='Ctrl+F' />
                <MenuItem image={replace} text='Replace...' />
              </PopupMenu>
            </SplitButton>
            <SplitButton text="Bookmarks" image={bookmarks}
              active={state.navBookmarksActive}
            //   arrowEvents={{onClick: run(this.navBookmarksClick), onBlur: blur('navBookmarksActive')}}
              >
              <PopupMenu>
                <MenuItem image={bookmarkList} events={{onClick: () => getForm('frmBookmarkList')}}
                  text='Bookmarks list' hotKey='Ctrl+F11' />
                <MenuItem image={bookmarkAdd} text='Add Bookmark' hotKey='Ctrl+Shift+F11' />
              </PopupMenu>

            </SplitButton>

            <DropDownWithLargeImageWithText text="Tasks" image={tasks}
              active={state.navTasksActive}
            //   events={{onClick: run(this.navTasksClick), onBlur: blur('navTasksActive')}}
              >
              <PopupMenu>
                <MenuItem image={taskExpand} text='Expand All Branches' />
                <MenuItem image={taskCollapse} text='Collapse All Branches' />
                <MenuSeparator text='Insert' />
                <MenuItem image={taskInsert} text='Insert Task' hotKey='Shift+F3' />
                <MenuItem image={taskInsertSub} text='Insert sub-Task' hotKey='Shift+F4' />
                <MenuSeparator text='Delete' />
                <MenuItem image={taskDelete} text='Delete Task or Branch' hotKey='Shift+F6' />
              </PopupMenu>
            </DropDownWithLargeImageWithText>

            <DropDownWithLargeImageWithText text="Numbering" image={numbering}
              active={state.navNumberingActive}
            //   events={{onClick: run(this.navNumberingClick), onBlur: blur('navNumberingActive')}}
              >
              <PopupMenu>
                <MenuItem image={numbering} text='Number Current Branch' />
                <MenuItem image={numberingEntire} text='Number Entire Estimate' />
                <MenuSeparator text='Rules' />
                <MenuItem image={numberingRules} text='Numbering Rules...'
                  events={{onClick: () => getForm('frmAutoNumbering')}} />
              </PopupMenu>
            </DropDownWithLargeImageWithText>

          </RibbonGroup>

          <Separator />

        </RibbonTabPage>

        <RibbonTabPage text="INSERT">
        </RibbonTabPage>

        <RibbonTabPage text="MISC">
        </RibbonTabPage>

    </MainRibbon>
```