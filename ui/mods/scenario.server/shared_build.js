var newBuildScenario = {

    "/pa/units/land/zap/bugzapper.json": ["bugs", 0, { row: 2, column: 0 }]
    
}
if (Build && Build.HotkeyModel && Build.HotkeyModel.SpecIdToGridMap) {
    _.extend(Build.HotkeyModel.SpecIdToGridMap, newBuildScenario);
}