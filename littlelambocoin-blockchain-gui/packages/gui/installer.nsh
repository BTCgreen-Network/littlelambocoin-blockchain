!include "nsDialogs.nsh"

; Add our customizations to the finish page
!macro customFinishPage
XPStyle on

Var DetectDlg
Var FinishDlg
Var LittlelambocoinSquirrelInstallLocation
Var LittlelambocoinSquirrelInstallVersion
Var LittlelambocoinSquirrelUninstaller
Var CheckboxUninstall
Var UninstallLittlelambocoinSquirrelInstall
Var BackButton
Var NextButton

Page custom detectOldLittlelambocoinVersion detectOldLittlelambocoinVersionPageLeave
Page custom finish finishLeave

; Add a page offering to uninstall an older build installed into the littlelambocoin-blockchain dir
Function detectOldLittlelambocoinVersion
  ; Check the registry for old littlelambocoin-blockchain installer keys
  ReadRegStr $LittlelambocoinSquirrelInstallLocation HKCU "Software\Microsoft\Windows\CurrentVersion\Uninstall\littlelambocoin-blockchain" "InstallLocation"
  ReadRegStr $LittlelambocoinSquirrelInstallVersion HKCU "Software\Microsoft\Windows\CurrentVersion\Uninstall\littlelambocoin-blockchain" "DisplayVersion"
  ReadRegStr $LittlelambocoinSquirrelUninstaller HKCU "Software\Microsoft\Windows\CurrentVersion\Uninstall\littlelambocoin-blockchain" "QuietUninstallString"

  StrCpy $UninstallLittlelambocoinSquirrelInstall ${BST_UNCHECKED} ; Initialize to unchecked so that a silent install skips uninstalling

  ; If registry keys aren't found, skip (Abort) this page and move forward
  ${If} LittlelambocoinSquirrelInstallVersion == error
  ${OrIf} LittlelambocoinSquirrelInstallLocation == error
  ${OrIf} $LittlelambocoinSquirrelUninstaller == error
  ${OrIf} $LittlelambocoinSquirrelInstallVersion == ""
  ${OrIf} $LittlelambocoinSquirrelInstallLocation == ""
  ${OrIf} $LittlelambocoinSquirrelUninstaller == ""
  ${OrIf} ${Silent}
    Abort
  ${EndIf}

  ; Check the uninstall checkbox by default
  StrCpy $UninstallLittlelambocoinSquirrelInstall ${BST_CHECKED}

  ; Magic create dialog incantation
  nsDialogs::Create 1018
  Pop $DetectDlg

  ${If} $DetectDlg == error
    Abort
  ${EndIf}

  !insertmacro MUI_HEADER_TEXT "Uninstall Old Version" "Would you like to uninstall the old version of Littlelambocoin Blockchain?"

  ${NSD_CreateLabel} 0 35 100% 12u "Found Littlelambocoin Blockchain $LittlelambocoinSquirrelInstallVersion installed in an old location:"
  ${NSD_CreateLabel} 12 57 100% 12u "$LittlelambocoinSquirrelInstallLocation"

  ${NSD_CreateCheckBox} 12 81 100% 12u "Uninstall Littlelambocoin Blockchain $LittlelambocoinSquirrelInstallVersion"
  Pop $CheckboxUninstall
  ${NSD_SetState} $CheckboxUninstall $UninstallLittlelambocoinSquirrelInstall
  ${NSD_OnClick} $CheckboxUninstall SetUninstall

  nsDialogs::Show

FunctionEnd

Function SetUninstall
  ; Set UninstallLittlelambocoinSquirrelInstall accordingly
  ${NSD_GetState} $CheckboxUninstall $UninstallLittlelambocoinSquirrelInstall
FunctionEnd

Function detectOldLittlelambocoinVersionPageLeave
  ${If} $UninstallLittlelambocoinSquirrelInstall == 1
    ; This could be improved... Experiments with adding an indeterminate progress bar (PBM_SETMARQUEE)
    ; were unsatisfactory.
    ExecWait $LittlelambocoinSquirrelUninstaller ; Blocks until complete (doesn't take long though)
  ${EndIf}
FunctionEnd

Function finish

  ; Magic create dialog incantation
  nsDialogs::Create 1018
  Pop $FinishDlg

  ${If} $FinishDlg == error
    Abort
  ${EndIf}

  GetDlgItem $NextButton $HWNDPARENT 1 ; 1 = Next button
  GetDlgItem $BackButton $HWNDPARENT 3 ; 3 = Back button

  ${NSD_CreateLabel} 0 35 100% 12u "Littlelambocoin has been installed successfully!"
  EnableWindow $BackButton 0 ; Disable the Back button
  SendMessage $NextButton ${WM_SETTEXT} 0 "STR:Let's Farm!" ; Button title is "Close" by default. Update it here.

  nsDialogs::Show

FunctionEnd

; Copied from electron-builder NSIS templates
Function StartApp
  ${if} ${isUpdated}
    StrCpy $1 "--updated"
  ${else}
    StrCpy $1 ""
  ${endif}
  ${StdUtils.ExecShellAsUser} $0 "$launchLink" "open" "$1"
FunctionEnd

Function finishLeave
  ; Launch the app at exit
  Call StartApp
FunctionEnd

; Section
; SectionEnd
!macroend
